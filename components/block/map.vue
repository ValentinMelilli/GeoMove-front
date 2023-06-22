<template>
    <div class="w-full h-[650px]">
        <Transition name="appear">
            <BlockStructureModal v-show="showModal" :blockData="selectedStructure" class="right-20 top-1/2" />
        </Transition>
        <l-map :useGlobalLeaflet="false" :zoom="13" :center="[43.613599, 3.873309]" ref="map" :options="{ zoomControl: false }" @ready="createMarkers">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-control-zoom position="bottomleft"></l-control-zoom>
        </l-map>
    </div>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import { LControlZoom, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

let map = ref();
let showModal = ref(false);
let selectedStructure = ref({});
let userMarker = ref();

const { data } = await useFetch('/api/structures', { method: 'GET' });

async function createMarkers() {
    const { marker, icon, divIcon } = await import('leaflet');

    // Create user marker
    navigator.geolocation.getCurrentPosition((position) => {
        map?.value?.leafletObject?.flyTo([position.coords.latitude, position.coords.longitude], 15);
        userMarker.value = marker([position.coords.latitude, position.coords.longitude], {
            icon: icon({
                iconUrl: '/tennis-ball.svg',
                iconSize: [25, 41],
            })
        }).addTo(map?.value?.leafletObject).bindTooltip('Vous êtes ici');

        userMarker.value.on('click', function(e: any) {
            showModal.value = false;
        });
    });

    // Update user marker
    navigator.geolocation.watchPosition((position) => {
        userMarker.value?.setLatLng([position.coords.latitude, position.coords.longitude]);
    });

    // Create structures markers
    data?.value?.forEach((structure : any) => {
        const m: any = marker(structure.coord, {
            icon: divIcon({
                html: '<svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5854 44.1494C23.3032 44.1494 38.1742 31.0082 38.1742 18.3962C38.1742 8.23678 29.8517 0.000976562 19.5854 0.000976562C9.31908 0.000976562 0.996582 8.23678 0.996582 18.3962C0.996582 31.0082 15.8676 44.1494 19.5854 44.1494ZM19.5853 24.3988C15.7354 24.3988 12.6145 21.2779 12.6145 17.428C12.6145 13.5781 15.7354 10.4572 19.5853 10.4572C23.4352 10.4572 26.5561 13.5781 26.5561 17.428C26.5561 21.2779 23.4352 24.3988 19.5853 24.3988Z" /></svg>',
                iconSize: [28, 34],
                iconAnchor: [14, 34],
                className: 'marker',
            })
        }).addTo(map?.value?.leafletObject);

        m.on('click', function(e: any) {
            showModal.value = true;
            selectedStructure.value = structure;
        });
    });
}
</script>

<style scoped lang="postcss">
.appear-enter-active,
.appear-leave-active {
  transition: all 0.2s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>

<style>
.leaflet-control-zoom {
    translate: 0 -64px;
}

.marker path {
    fill: #1D6C8B;
    transition: 0.1s;
}

.marker:hover path {
    fill: #F08300;
}
</style>
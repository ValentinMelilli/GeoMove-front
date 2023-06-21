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
    const { marker, icon } = await import('leaflet');

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
        const m: any = marker(structure.coord).addTo(map?.value?.leafletObject);

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
</style>
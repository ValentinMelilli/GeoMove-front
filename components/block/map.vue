<template>
    <div class="w-full h-screen">
        <l-map :useGlobalLeaflet="false" :zoom="13" :center="[43.613599, 3.873309]" ref="map" :options="{ zoomControl: false }">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-control-zoom position="bottomleft"></l-control-zoom>
        </l-map>
    </div>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import { LControlZoom, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

let map = ref();

/*const { data } = await useFetch('/api/structures', { method: 'GET' });

onMounted(async () => {
    const { marker } = await import('leaflet');

    data?.value?.forEach((structure : any) => {
        marker(structure.coord)
        .addTo(map.value.leafletObject)
        .bindPopup(`<b>${structure.name}</b><br>${structure.address}<br>${structure.phone}<br>${structure.email}<br>${structure.website}`);
    });
})*/
</script>
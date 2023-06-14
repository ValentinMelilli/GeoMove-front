<template>
    <div class="w-full h-full">
        <l-map :useGlobalLeaflet="true" :zoom="13" :center="[47.413220, -1.219482]" ref="map">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        </l-map>
    </div>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

let map = ref();

const { data } = await useAsyncData('structures', async () => {
    let structures : any = [];
    const runtimeConfig = useRuntimeConfig()
    const fetch = await $fetch(runtimeConfig.apiURL + '/structures', { method: 'GET' }) as any;

    fetch.forEach((structure : any) => {
        let coord = structure.coord.split(',');
        structures.push({
            name: structure.name,
            description: structure.description,
            address: `${structure.address}, ${structure.zip} ${structure.city}`,
            phone: structure.phone,
            email: structure.email,
            website: structure.website,
            timetable: structure.timetable,
            pricing: structure.pricing,
            coord: coord,
        });
    });

    return structures;
});

onMounted(async () => {
    //const { MarkerClusterGroup } = await import('leaflet.markercluster');
    const { marker } = await import('leaflet');

    /*const cluster = new MarkerClusterGroup();
    map.value.leafletObject.addLayer(cluster)

    data?.value?.forEach((structure : any) => {
        marker(structure.coord)
        .addTo(cluster)
        .bindPopup(`<b>${structure.name}</b><br>${structure.address}<br>${structure.phone}<br>${structure.email}<br>${structure.website}`);
    });*/
})
</script>
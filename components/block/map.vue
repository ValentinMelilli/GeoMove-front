<template>
    <div class="w-full h-[650px]">
        <Transition name="appear">
            <BlockStructureModal v-show="showModal" :blockData="selectedStructure" class="right-20 top-1/2" />
        </Transition>
        <l-map :useGlobalLeaflet="false" :zoom="13" :center="[43.613599, 3.873309]" ref="map" :options="{ zoomControl: false }">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-control-zoom position="bottomleft"></l-control-zoom>
        </l-map>
    </div>
</template>

<script lang="ts" setup>
import "leaflet/dist/leaflet.css"
import { LControlZoom, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
//const emit = defineEmits(['marker-click']);

let map = ref();
let showModal = ref(false);
let selectedStructure = ref({});

const { data } = await useFetch('/api/structures', { method: 'GET' });

onMounted(async () => {
    const { marker } = await import('leaflet');

    data?.value?.forEach((structure : any) => {
        const m: any = marker(structure.coord)
        .addTo(map.value.leafletObject);
        /*.bindPopup(`<b>${structure.name}</b><br>${structure.address}<br>${structure.phone}<br>${structure.email}<br>${structure.website}`);*/
        m.on('click', function(e: any) {
            showModal.value = true;
            selectedStructure.value = structure;
        });
    });
})
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

.leaflet-control-zoom {
    translate: 0 -64px;
}
</style>
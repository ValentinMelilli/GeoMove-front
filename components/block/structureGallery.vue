<template>
    <section class="my-10 text-center">
        <Swiper :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }" class="swiper">
        </Swiper>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(["blockData"]);
</script>
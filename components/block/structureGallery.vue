<template>
    <section class="my-10 text-center">
        <Swiper
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :loop="true"
            :lazy="true"
            class="swiper"
        >
            <SwiperSlide v-for="(image, i) in props.blockData.gallery" :key="i">
                <img :src="image.image" class="w-1/2 h-auto m-auto" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(["blockData"]);
</script>
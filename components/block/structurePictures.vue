<template>
    <section class="my-10 text-center">
        <Swiper
            :slides-per-view="3"
            :centeredSlides="true"
            :pagination="{
                clickable: true,
                dynamicBullets: true,
            }"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }"
            :loop="true"
            :lazy="true"
            class="swiper"
        >
            <SwiperSlide v-for="(image, i) in props.blockData.gallery" :key="i">
                <img :src="image.image" class="w-[200px] h-[200px] rounded-3xl" />
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(["blockData"]);
</script>
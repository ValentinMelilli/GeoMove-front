<template>
    <div class="p-8 bg-accent-3 flex flex-row">
        <button @click="swiper.slidePrev()">
            <!--<IconArrowLeft class="h-8 w-8" />-->
        </button>
        <Swiper :slides-per-view="6" :space-between="50" :pagination="{ clickable: true }" class="swiper">
            <SwiperSlide v-for="(sport, i) in getSports">
                <button>
                    <component :is="sports[sport]" class="h-16 w-16 stroke-black" />
                </button>
            </SwiperSlide>
        </Swiper>
        <button @click="swiper.slideNext()">
            <!--<IconArrowRight class="h-8 w-8" />-->
        </button>
    </div>
</template>

<script lang="ts" setup>
const swiper = useSwiper()

const sports: any = {
    'Tennis': resolveComponent('IconTennis'),
    'Football': resolveComponent('IconSoccer'),
    'Basketball': resolveComponent('IconBasketball'),
    'Kayak': resolveComponent('IconKayak'),
    'Équitation': resolveComponent('IconHorse'),
    'Gymnasique': resolveComponent('IconGym'),
    'Musculation': resolveComponent('IconWeight'),
    'Natation': resolveComponent('IconNatation'),
    'Patinage': resolveComponent('IconIceSkate'),
    'Rugby': resolveComponent('IconRugby'),
    'Yoga': resolveComponent('IconYoga'),
    'Escalade': resolveComponent('IconClimbing'),
}

const getSports = [
    'Rugby',
    'Tennis',
    'Football',
    'Natation',
    'Kayak',
    'Yoga',
    'Équitation',
    'Basketball',
    'Escalade',
    'Gymnasique',
    'Musculation',
]
</script>
<template>
    <section class="flex flex-row items-center my-10">
        <div class="w-2/3">
            <div class="bg-white rounded-xl p-4" v-html="getContent">
            </div>
        </div>
        <div class="w-1/3 place-content-end flex flex-wrap">
            <div v-for="(sport, i) in structureSports" class="m-2">
                <component :is="sports[sport]" class="h-12 w-12" />
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { Pricing } from 'api_response';

const props = defineProps(["blockData"]);

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

const structureSports = computed(() => {
    let sports: string[] = [];

    props.blockData.pricing.forEach((pricing: Pricing) => {
        if (!sports.includes(pricing.sport.name)) {
            sports.push(pricing.sport.name);
        }
    });

    return sports;
});

const getContent = computed(() => props.blockData.description.replace(/\\n/g, "<br />"))
</script>
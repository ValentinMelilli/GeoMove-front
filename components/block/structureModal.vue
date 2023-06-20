<template>
    <div class="absolute z-[10000] w-1/4">
        <div class="p-4 w-full bg-accent-2 text-white flex flex-row rounded-t-3xl justify-center">
            {{ props?.blockData?.name }}
            <button class="ml-4">
                <IconHeart class="h-6 w-6 stroke-white" />
            </button>
        </div>
        <div class="p-4 w-full bg-white rounded-b-3xl">
            {{ props?.blockData?.address }}
            <div class="flex flex-row justify-center m-4">
                <div v-for="(sport, i) in structureSports" class="m-2">
                    <component :is="sports[sport]" class="h-10 w-10" />
                </div>
            </div>
            <div class="w-fit mx-auto">
                <NuxtLink :to="'/structures/' + props?.blockData?.id" class="py-2 px-6 border-accent-2 border-2 rounded-full duration-200 hover:border-primary hover:text-primary">Ça m'intéresse</NuxtLink>
            </div>
            
        </div>
    </div>
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
}

const structureSports = computed(() => {
    let sports: string[] = [];

    props?.blockData?.pricing?.forEach((pricing: Pricing) => {
        if (!sports.includes(pricing.sport.name)) {
            sports.push(pricing.sport.name);
        }
    });

    return sports;
});
</script>
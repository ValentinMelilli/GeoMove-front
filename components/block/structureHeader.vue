<template>
    <section class="flex flex-row my-10">
        <div class="mr-[100px]">
            <div class="ml-[6rem]">
                <button class="absolute">
                    <IconHeart class="h-6" />
                </button>
            </div>
            <img :src="props.blockData.image" alt="Profile picture" class="h-32 w-32 rounded-full bg-gray-300" />
        </div>
        <div class="grow flex flex-col">
            <h1 class="flex flex-row text-xl">
                {{ props.blockData.name }}
                <button class="ml-4">
                    <IconMenu class="h-6" />
                </button>
            </h1>
            <a :href="props.blockData.website" target="_blank" class="underline">
                {{ props.blockData.website }}
            </a>
            <UIRating :rating="props.blockData.rating" />
            <div class="flex flex-row">
                <div class="flex flex-row items-center">
                    <IconPadlockOpen class="h-5 mr-1" />
                    Accès libre
                </div>
            </div>
        </div>
        <div>
            <div class="flex flex-row justify-end mb-2">
                <IconBadgeVerified class="h-10 mr-2" />
                <IconBadgeSponsored class="h-10" />
            </div>
            <button class="rounded-full py-2 px-6 bg-accent-2 text-white">
                Contacter
            </button>
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps(["blockData"]);
</script>
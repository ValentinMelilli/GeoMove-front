<template>
    <div class="bg-white w-full px-10 py-8 flex flex-row items-center">
        <NuxtLink :to="'/'">
            <img src="/logo-header.svg" alt="Logo" class="w-[120px]" />
        </NuxtLink>
        <div class="ml-auto h-full text-lg flex flex-row items-center">
            <!-- links -->
            <div class="flex flex-row">
                <button class="mx-6 flex flex-row items-center">Comparateur <IconChevronDown class="ml-2 h-6 w-6" /></button>
                <button class="mx-6 flex flex-row items-center">Abonnements <IconChevronDown class="ml-2 h-6 w-6" /></button>
                <button class="mx-6 flex flex-row items-center">Nous contacter <IconChevronDown class="ml-2 h-6 w-6" /></button>
            </div>
            <!-- icons -->
            <div class="flex flex-row">
                <button class="mx-6"><IconHeart class="h-8 w-8" /></button>
                <button class="mx-6"><IconUser class="h-8 w-8" /></button>
            </div>
        </div>
    </div>
</template>
<template>
    <div class="w-full p-8 bg-accent-2">
        <div class="flex flex-row">
            <div class="rounded-full bg-white m-auto w-1/2 flex flex-row py-2 px-6">
                <button class="flex flex-row text-accent-2 stroke-accent-2 duration-100 hover:text-primary hover:stroke-primary w-1/3">
                    <IconCompass class="h-6 w-6 mr-4" />
                    <span>Lieu</span>
                </button>
                <div class="bg-gray-300 w-px mx-4"></div>
                <button class="flex flex-row text-accent-2 stroke-accent-2 duration-100 hover:text-primary hover:stroke-primary w-1/3">
                    <IconCalendar class="h-6 w-6 mr-4" />
                    <span>Périodicité</span>
                </button>
                <div class="bg-gray-300 w-px mx-4"></div>
                <button class="flex flex-row text-accent-2 stroke-accent-2 duration-100 hover:text-primary hover:stroke-primary w-1/3">
                    <IconBook class="h-6 w-6 mr-4" />
                    <span>Cours</span>
                </button>
            </div>
            <button class="rounded-full bg-white absolute right-20 w-fit flex flex-row py-2 px-6 duration-200 text-accent-2 stroke-accent-2  hover:text-primary hover:stroke-primary">
                <IconControls class="h-6 w-6 mr-4" />
                Filtres
            </button>
        </div>
    </div>
</template>
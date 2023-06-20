<template>
    <div class="w-full p-8 bg-accent-2">
        <div class="flex flex-row">
            <div class="rounded-full bg-white m-auto w-fit flex flex-row py-2 px-6">
                <div class="flex flex-row">
                    <IconCompass class="h-6 w-6 mr-4" />
                    <input type="text" placeholder="Lieu" class="focus:outline-none" />
                </div>
                <div class="bg-gray-300 w-px mx-4"></div>
                <div class="flex flex-row">
                    <IconCalendar class="h-6 w-6 mr-4" />
                    <input type="text" placeholder="Périodicité" class="focus:outline-none" />
                </div>
                <div class="bg-gray-300 w-px mx-4"></div>
                <div class="flex flex-row">
                    <IconBook class="h-6 w-6 mr-4" />
                    <input type="text" placeholder="Cours" class="focus:outline-none" />
                </div>
            </div>
            <button class="rounded-full bg-white absolute right-20 w-fit flex flex-row py-2 px-6 duration-200 hover:text-primary">
                <IconControls class="h-6 w-6 mr-4" />
                Filtres
            </button>
        </div>
    </div>
</template>
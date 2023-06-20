<template>
    <div class="p-4 flex flex-row items-center rounded-b-3xl bg-white w-fit m-auto absolute z-[10000] centered">
        <IconSearch class="h-6 w-6 mr-4" />
        <input type="search" placeholder="Je Recherche..." class="focus:outline-none" />
    </div>
</template>

<style>
.centered {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
</style>
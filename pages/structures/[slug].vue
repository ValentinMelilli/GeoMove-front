<template>
    <div class="bg-accent-3 w-full py-20">
        <div class="container m-auto pb-12">
            <BlockStructureHeader :blockData="data" />
            <BlockStructureInfo :blockData="data" />
            <UISeparator />
            <BlockStructureTimetable :blockData="data" />
            <UISeparator />
        </div>
    </div>
</template>

<script lang="ts" setup>
const { params } = useRoute();

const { data } = await useFetch('/api/structures/' + params.slug, { method: 'GET' });
</script>
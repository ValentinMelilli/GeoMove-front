<template>
    <div class="">
        <BlockFilters />
        <BlockSportsSlider />
        <UISearchSmall />
        <BlockMap @marker-click="test" />
    </div>
</template>

<script lang="ts" setup>
function test(data: any) {
    console.log(data);
}
</script>
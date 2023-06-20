<template>
    <img :src="props.src" :alt="props.alt" class="h-32 w-32 rounded-full bg-gray-300" />
</template>

<script lang="ts" setup>
const props = defineProps(["src", "alt"]);
</script>
<template>
    <button class="rounded-full py-2 px-6 bg-accent-2 text-white">
        {{ props.text }}
    </button>
</template>

<script lang="ts" setup>
const props = defineProps(["text"]);
</script>
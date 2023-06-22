<template>
    <button class="rounded-full py-2 px-6 bg-accent-2 text-white duration-200 hover:bg-primary">
        {{ props.text }}
    </button>
</template>

<script lang="ts" setup>
const props = defineProps(["text"]);
</script>
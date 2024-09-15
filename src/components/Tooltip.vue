<script setup>
import { defineProps } from 'vue';

const props = defineProps(['text'])
</script>

<template>
    <!--add class display (relative group) in parent element-->
    <div
        class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm bg-black/90 text-gray-200 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        {{ props.text }}
    </div>
</template>
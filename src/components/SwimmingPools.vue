<script setup>
import PoolSlider from './PoolSlider.vue';
import PoolDetails from './PoolDetails.vue';
const props = defineProps(['pools']);
</script>

<template>
    <div class="flex flex-col items-center gap-y-4">
        <PoolSlider :pools="pools" />
        <PoolDetails />
    </div>
</template>
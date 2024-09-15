<script setup>
import { defineProps } from 'vue';
import Cottage from './Cottage.vue';

const props = defineProps({
    cottages: Array,
    limit: Number
})
</script>
<template>
    <div class="flex flex-col items-center justify-center">
        <label class="text-3xl font-semibold">Cottage</label>
        <div
            class="container flex justify-center mt-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-8 px-4">
            <Cottage v-for="cottage in cottages.slice(0, limit || cottages.length)" :key="cottage.id"
                :cottage=cottage />
        </div>
    </div>
</template>
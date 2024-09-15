<script setup>
import Rooms from './Rooms.vue';
import Cottages from './Cottages.vue';
import SwimmingPools from './SwimmingPools.vue';
import { defineProps, onMounted } from 'vue';

const props = defineProps(['pools', 'rooms', 'cottages', 'rLimit', 'cLimit'])

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<template>
    <div class="py-6 flex flex-col gap-y-8">
        <SwimmingPools :pools="pools" />
        <Rooms :rooms="rooms" :limit="rLimit" />
        <Cottages :cottages="cottages" :limit="cLimit" />
    </div>
</template>
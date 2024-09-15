<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    cottage: Object
})
</script>
<template>
    <div
        class="h-96 w-[100%] bg-cover relative rounded-xl group overflow-hidden shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] group">
        <img class="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300 saturate-200"
            :src="cottage.image" alt="">
        <div
            class="absolute inset-0 bg-black rounded-xl translate-transform duration-300 ease bg-opacity-30 backdrop-blur-sm translate-transform group-hover:-translate-y-0 translate-y-full text-white flex flex-col items-center justify-center p-4">
            <label class="text-2xl font-semibold">{{ cottage.name.toUpperCase() }}</label>
            <label class="font-medium">Price: {{ cottage.price }}</label>
        </div>
    </div>
</template>
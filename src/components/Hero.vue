<script setup>
import { defineProps } from 'vue';

const props = defineProps(['bg'])
</script>

<template>
    <div class="-mt-20 bg-cover bg-center h-screen relative" :style="{ backgroundImage: `url(${props.bg})` }">
        <div class="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
            class="relative text-white flex items-center px-4 flex-col gap-y-4 justify-center w-full h-full text-center">
            <label class="text-6xl font-bold text-center">Relax, Enjoy and have Fun</label>
            <label class="text-lg">A place where you can relax, and savor the cool, clean air of Pagsanjan Laguna, away
                from the
                hassle</label>
            <a href="https://bit.ly/818Booking "
                class="bg-hot text-black font-semibold text-xl py-2 px-10 rounded-xl hover:bg-opacity-80 linear duration-300 mt-4 translate-transform hover:scale-110">Book
                Now</a>
        </div>
    </div>
</template>

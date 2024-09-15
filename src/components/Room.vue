<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps(['room'])
const showDetails = ref(false)
</script>
<template>
    <div
        class="flex flex-col justify-center text-center bg-white text-black text-xs p-4 rounded transform-translate hover:-translate-y-6 linear duration-300 hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] relative">
        <div class="h-48 overflow-hidden rounded mb-4 relative group">
            <img class="w-full h-full rounded hover:scale-110 object-cover linear duration-300" :src="room.image"
                alt="">
            <button @click="showDetails = true" type="button"
                class="absolute top-3 right-3 pi pi-info-circle text-lg bg-hot rounded-full translate-transform hover:scale-125 ease-in-out duration-300 opacity-0 group-hover:opacity-100"></button>
        </div>
        <label class="font-semibold text-lg">{{ room.name }}</label>
        <label class="font-medium">Check In / Out for 11 hrs.</label>
        <label class="font-medium">Check In / Out for 23 hrs.</label>
        <a href="https://bit.ly/818Booking"
            class="bg-hot text-base font-bold mt-4 py-3 hover:bg-opacity-80 linear duration-300">BOOK NOW</a>

        <div
            :class="['absolute top-0 bottom-0 right-0 left-0 bg-clay rounded group', showDetails ? '' : 'opacity-0 -z-10']">
            <div class="relative w-full h-full pt-8 p-6">
                <button @click="showDetails = false"
                    class="absolute left-3 top-2 pi pi-angle-left text-xl bg-hot rounded-full translate-transform hover:scale-125 ease-in-out duration-300"></button>
                <div class="w-full h-full bg-hot/80 rounded text-sm p-4 flex flex-col justify-center gap-y-4">
                    <label class="text-xl font-bold">Room Details</label>
                    <div>
                        <label class="block text-base font-semibold">Price: {{ room.price }}</label>
                        <label>{{ room.details }}</label>
                    </div>
                    <div>
                        <label class="block text-base font-semibold">Price for 11 hrs.</label>
                        <label class="font-medium block">(Room for 2 pax = 1000)</label>
                        <label class="font-medium block">(Family Room with cottage = 3000)</label>
                    </div>
                    <div>
                        <label class="block text-base font-semibold">Price for 23 hrs.</label>
                        <label class=" font-medium block">(Room for 2 pax = 1500)</label>
                        <label class="font-medium block">(Family Room with cottage = 3500)</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
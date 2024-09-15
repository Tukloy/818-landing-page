<script setup>
import { defineProps } from 'vue';

const props = defineProps(['details'])
</script>

<template>
    <div class="flex flex-col py-8 px-8 items-center justify-center">
        <div class="container flex p-8 rounded-lg bg-gray-100 text-black flex-wrap gap-6">
            <div class="flex-1 flex flex-col">
                <label class="text-4xl font-bold block">Contact Us</label>
                <div class="flex mt-4 gap-x-4 justify-center flex-wrap gap-y-4">
                    <label
                        class="block bg-blue-500 py-1 px-3 text-white hover:bg-opacity-80 cursor-pointer linear duration-200 flex items-center justify-center rounded-lg">
                        <i class="pi pi-facebook pr-2"></i>Facebook</label>
                    <label
                        class="block bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer hover:bg-opacity-90 transition duration-200 ease-in-out flex items-center justify-center">
                        <i class="pi pi-instagram pr-2 text-lg"></i>Instagram
                    </label>
                    <label
                        class="block bg-gray-950 rounded-lg py-1 px-3 text-white hover:bg-opacity-80 cursor-pointer linear duration-200 flex items-center justify-center">
                        <i class="pi pi-tiktok pr-2"></i>TikTok</label>
                </div>
                <div class="mt-6">
                    <label class="text-lg font-semibold">Location</label>
                    <iframe width="90%" height="200"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=121.45336047600765%2C14.280637686168674&layer=mapnik"
                        style="border:0;" loading="lazy">
                    </iframe>
                </div>
            </div>
            <div class="flex-1 flex justify-center items-center">
                <div class="max-w-64 w-[100%] min-w-48 bg-gray-900 h-96 relative rounded-3xl shadow-2xl flex-wrap">
                    <div class="absolute top-10 flex flex-col bottom-16 right-4 left-4">
                        <div class="flex-1 flex flex-col items-center justify-center bg-blue-500">
                            <label class="text-white font-bold text-2xl">GCash</label>
                            <label class="text-white text-sm">{{ details.payment.gcash.name }}</label>
                            <label class="text-white font-semibold text-xs">{{ details.payment.gcash.no }}</label>
                        </div>
                        <div class="flex-1 flex flex-col text-black items-center justify-center bg-white">
                            <label class="text-customGreen font-bold text-2xl">maya</label>
                            <label class="text-sm">{{ details.payment.gcash.name }}</label>
                            <label class="font-semibold text-xs">{{ details.payment.gcash.no }}</label>
                        </div>
                    </div>
                    <div class="absolute bottom-4 flex justify-center w-full items-center">
                        <div class=" h-8 w-8 rounded-full border-2 border-white"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
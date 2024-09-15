<script setup>
import { defineProps } from 'vue';

const props = defineProps(['videoSource', 'wallpaper'])
</script>

<template>
    <div class="flex flex-col items-center w-full">
        <div class="flex container flex-col sm:flex-row">
            <div class="lg:flex-1 h-96  overflow-hidden">
                <video class="shadow-lg w-full h-full object-cover grayscale hover:grayscale-0 linear duration-300"
                    autoplay loop muted playsinline>
                    <source :src="videoSource" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="flex-1 flex  px-10 py-20 bg-cover relative"
                :style="{ backgroundImage: `url(${props.wallpaper})` }">
                <div class="absolute inset-0 bg-gray-800 opacity-70"></div>
                <div class="flex flex-col gap-y-4 justify-center relative z-10">
                    <label class="text-3xl font-semibold">Gallery</label>
                    <label>A picture is worth a thousand words, and we invite you to explore the visual narrative of 818
                        Resort Pagsanjan Laguna</label>
                </div>
                <RouterLink to="/gallery"
                    class="absolute z-20 bottom-6 right-8 bg-hot py-3 px-6  font-semibold rounded hover:bg-opacity-80 bg-opacity-20 backdrop-blur-sm linear duration-300 animate-bounce-right hover:animate-none">
                    View
                    Gallery <i class="pi pi-angle-right"></i> </RouterLink>
            </div>
        </div>
    </div>
</template>
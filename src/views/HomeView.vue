<script setup>
import Hero from '@/components/Hero.vue';
import Services from '@/components/Services.vue';
import Exclusive from '@/components/Exclusive.vue';
import GalleryHero from '@/components/GalleryHero.vue';
import Reviews from '@/components/Reviews.vue';
import { RouterLink } from 'vue-router';
import { defineProps, onMounted } from 'vue';

const props = defineProps(['pools', 'rooms', 'cottages', 'bg', 'offers', 'videoSource', 'wallpaper', 'reviews'])

onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>
<template>
    <div class="flex flex-col pb-10">
        <Hero :bg="bg" />
        <Exclusive :offers="offers" />
        <div class="flex flex-col items-center">
            <Services :rLimit="4" :cLimit="3" :pools="pools" :rooms="rooms" :cottages="cottages" />
            <RouterLink to="/services"
                class="text-lg font-semibold bg-hot text-black py-2 px-8 mb-8 rounded hover:bg-opacity-80 translate-transform hover:scale-110 ease-in-out duration-300">
                View All
            </RouterLink>
        </div>
        <GalleryHero :videoSource="videoSource" :wallpaper="wallpaper" />
        <Reviews :reviews="reviews" />
    </div>
</template>

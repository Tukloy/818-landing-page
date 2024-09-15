<script setup>
import { defineProps, onMounted, reactive, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router';
import Tooltip from './Tooltip.vue';

const state = reactive({
    isFixed: false,
    toggleMenu: false
})
const props = defineProps(['logo', 'resortName'])

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const handleScroll = () => {
    state.isFixed = window.scrollY === 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <!--this is small nav-->
    <div
        :class="['fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-gray-900 p-4 block sm:hidden ease-in-out duration-300', state.isFixed ? 'bg-opacity-30' : 'bg-opacity-80']">
        <div class="w-full flex justify-center relative">
            <button @click="state.toggleMenu = true"
                class="absolute top-1 left-0 pi pi-bars text-3xl hover:scale-110 ease hover:text-hot duration-200"></button>
            <RouterLink to="/" activeClass="text-hot" class="flex items-center group cursor-pointer mx-20">
                <img class="w-10 mr-2 translate-transform ease-in-out duration-300 group-hover:scale-110 group-hover:animate-bounce"
                    :src="props.logo" alt="">
                <label class="text-2xl font-bold group-hover:text-hot linear duration-300 whitespace-nowrap"><span
                        class="font-extrabold text-hot">{{ resortName }}</span> Resort</label>
            </RouterLink>
        </div>
    </div>
    <!--small nav content-->
    <div
        :class="['fixed inset-0 bg-black z-50 translate-transform linear duration-300 bg-opacity-90 backdrop-blur-sm', !state.toggleMenu ? '-translate-x-full pointer-events-none' : 'translate-x-0']">
        <div class="w-full h-full relative flex flex-col items-center py-6 px-4 gap-y-10">
            <div class="flex items-center py-6 w-full justify-center border-b-2 border-hot">
                <img class="w-10 mr-3" :src="props.logo" alt="">
                <label class="text-2xl font-bold group-hover:text-hot linear duration-300 whitespace-nowrap"><span
                        class="font-extrabold text-hot">{{ resortName }}</span> Resort</label>
            </div>
            <div class="flex flex-col h-full items-center justify-between text-base font-semibold">
                <RouterLink to="/" activeClass="text-hot border-b-2 border-hot" @click="state.toggleMenu = false">HOME
                </RouterLink>
                <RouterLink to="/services" activeClass="text-hot border-b-2 border-hot"
                    @click="state.toggleMenu = false">SERVICES</RouterLink>
                <RouterLink to="/galerry" activeClass="text-hot border-b-2 border-hot"
                    @click="state.toggleMenu = false">GALLERY</RouterLink>
                <RouterLink to="/contact-us" activeClass="text-hot border-b-2 border-hot"
                    @click="state.toggleMenu = false">CONTACT US</RouterLink>
                <RouterLink to="/blog" activeClass="text-hot border-b-2 border-hot" @click="state.toggleMenu = false">
                    BLOG</RouterLink>
                <RouterLink to="/about-us" activeClass="text-hot border-b-2 border-hot"
                    @click="state.toggleMenu = false">ABOUT US</RouterLink>
            </div>
            <button @click="state.toggleMenu = false" class="absolute top-4 right-4 pi pi-times"></button>
        </div>
    </div>
    <!--this is the big nav-->
    <div :class="[
        'fixed top-0 right-0 left-0 bg-gray-900 px-8 items-center h-20 w-full backdrop-blur-sm z-50 ease-in-out duration-300',
        state.isFixed ? 'bg-opacity-30' : 'bg-opacity-80',
        'hidden sm:flex'
    ]">
        <div class="text-xl font-semibold flex w-full justify-center items-center gap-x-10">
            <RouterLink to="/" activeClass="text-hot" class="flex items-center relative group">
                <i class="pi pi-home transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="Home" />
            </RouterLink>
            <RouterLink to="/services" activeClass="text-hot" class="flex items-center relative group">
                <i class="pi pi-shop transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="Services" />
            </RouterLink>
            <RouterLink to="/gallery" activeClass="text-hot" class="flex items-center relative group">
                <i class="pi pi-images transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="Gallery" />
            </RouterLink>
            <RouterLink to="/" activeClass="text-hot" class="flex items-center group cursor-pointer mx-20">
                <img class="w-10 mr-2 translate-transform ease-in-out duration-300 group-hover:scale-110 group-hover:animate-bounce"
                    :src="props.logo" alt="">
                <label class="text-2xl font-bold group-hover:text-hot linear duration-300 whitespace-nowrap"><span
                        class="font-extrabold text-hot">{{ resortName }}</span> Resort</label>
            </RouterLink>
            <RouterLink to="/contact-us" activeClass="text-hot" class="flex items-center relative group">
                <i class="pi pi-phone transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="Contact Us" />
            </RouterLink>
            <RouterLink to="/blog" activeClass="text-hot" class="flex items-center relative group">
                <i class="pi pi-id-card transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="Blog" />
            </RouterLink>
            <RouterLink to="/about-us" activeClass="text-hot" class="flex items-center relative group">
                <i
                    class="pi pi-question-circle transform-translate hover:scale-125 ease duration-300 hover:text-hot"></i>
                <Tooltip text="About Us" />
            </RouterLink>
        </div>
    </div>
    <!--scroll to top-->
    <div class="fixed bottom-6 right-8 z-50 text-white">
        <button @click="scrollToTop"
            class="text-4xl pi pi-angle-up bg-gray-900 opacity-50 backdrop-blur-sm hover:opacity-100 linear duration-200"></button>
    </div>
</template>
<script setup>
import GalleryFull from './GalleryFull.vue';
import { defineProps, reactive, onMounted, computed } from 'vue';

const state = reactive({
    path: '',
    showImage: false,
    selectedType: null,
})
const props = defineProps({
    images: Array
})

const showGallery = (path) => {
    state.showImage = true
    state.path = path
}

const closeGallery = (close) => {
    state.showImage = close
}

const uniqueTypes = computed(() => {
    const types = props.images.map(image => image.type);
    return [...new Set(types)];
})

const filterImage = (type) => {
    state.selectedType = type;
}

const filteredImages = computed(() => {
    if (!state.selectedType) {
        return props.images;
    }
    return props.images.filter(image => image.type === state.selectedType);
})


onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
</script>

<template>
    <div class="flex flex-col items-center min-h-screen pt-8 pb-20 gap-y-8 px-6 relative">
        <label class="text-3xl font-semibold">Gallery</label>
        <div class="flex gap-4 justify-center text-black font-semibold flex-wrap">
            <button @click="filterImage(null)"
                :class="['py-2 px-6 rounded-full hover:bg-hot linear duration-300', state.selectedType === null ? 'bg-hot' : 'bg-clay']">All
            </button>
            <button @click="filterImage(type)" v-for="type in uniqueTypes" :key="type"
                :class="['py-2 px-6 rounded-full hover:bg-hot linear duration-300', state.selectedType === type ? 'bg-hot' : 'bg-clay']">{{
                    type.charAt(0).toUpperCase()
                    + type.slice(1) }}</button>
        </div>
        <div v-if="images.length > 0"
            class="container grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div @click="showGallery(image.path)" v-for="image in filteredImages" :key="image.id"
                class="w-auto h-44 border-8 bg-white overflow-hidden group grayscale hover:grayscale-0 cursor-zoom-in relative">
                <img class="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300" :src="image.path"
                    alt="">
                <label
                    class="absolute bottom-1 left-2 bg-black py-1 px-2 bg-opacity-70 backdrop-blur-sm opacity-0 group-hover:opacity-100 text-xs">{{
                        image.name
                    }}</label>
            </div>
            <GalleryFull :path="state.path" :showImage="state.showImage" @emitCloseImage="closeGallery" />
        </div>
        <div class="h-screen flex items-center justify-center" v-else>
            <label class="text-6xl text-clay">No Photos Found</label>
        </div>
    </div>
</template>
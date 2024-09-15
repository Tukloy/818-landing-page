<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps(['pools']);
const currentSlide = ref(0);
const slideDirection = ref('right'); // Keep track of slide direction

// Function to go to the next slide
const nextSlide = () => {
    slideDirection.value = 'right';
    currentSlide.value = (currentSlide.value + 1) % props.pools.length;
};

// Function to go to the previous slide
const prevSlide = () => {
    slideDirection.value = 'left';
    currentSlide.value = (currentSlide.value - 1 + props.pools.length) % props.pools.length;
};

// Computed property to show the current pool data
const currentPool = computed(() => {
    return props.pools[currentSlide.value];
});

let intervalId;
onMounted(() => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 5000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>
<template>
    <label class="text-3xl font-semibold">Swimming Pools</label>
    <!-- Conditionally render content if pools are available -->
    <p class="text-xl font-medium" v-if="currentPool">{{ currentPool.name }}</p>

    <div v-if="currentPool"
        class="relative w-[100%] h-[60vh] overflow-hidden group border-8 border-white overflow-hidden">
        <!-- Image with Transition -->
        <transition :name="slideDirection === 'right' ? 'slide-right' : 'slide-left'" mode="out-in">
            <img class="w-full h-full object-cover saturate-200" :src="currentPool.image" :alt="currentPool.name"
                :key="currentPool.id" />
        </transition>
        <button @click="prevSlide"
            class="absolute left-2 top-1/2 transform -translate-y-1/2  text-white px-2 py-1 opacity-30 bg-black group-hover:opacity-60 hover:opacity-100 linear duration-200">
            &#9664;
        </button>
        <button @click="nextSlide"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white px-2 py-1 opacity-30 bg-black hover:opacity-100 group-hover:opacity-60 linear duration-200">
            &#9654;
        </button>
    </div>
    <p v-else>No pools available</p>
</template>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.5s ease;
}

.slide-right-enter,
.slide-right-leave-to {
    transform: translateX(100%);
}

.slide-right-leave-active {
    transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.5s ease;
}

.slide-left-enter,
.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-left-leave-active {
    transform: translateX(100%);
}
</style>

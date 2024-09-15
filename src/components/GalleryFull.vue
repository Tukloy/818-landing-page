<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(
    {
        path: String,
        showImage: {
            type: Boolean,
            default: false
        }
    }
)

const emit = defineEmits(['emitCloseImage'])
</script>
<template>
    <div v-if="showImage" class="fixed inset-0 bg-gray-950 z-50 bg-opacity-90 backdrop-blur-sm">
        <div class="h-full w-full relative flex justify-center items-center">
            <img class="w-[60%]" :src="path" alt="">
            <button @click="emit('emitCloseImage', false)"
                class="absolute top-3 right-3 text-1xl pi pi-times hover:text-gray-500 linear duration-300">
            </button>
        </div>
    </div>
</template>
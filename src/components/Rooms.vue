<script setup>
import Room from './Room.vue';
import { defineProps } from 'vue';

const props = defineProps({
    limit: Number,
    rooms: Array
});
</script>

<template>
    <div class="bg-black flex flex-col gap-y-6 items-center justify-center text-sm py-8">
        <label class="text-3xl font-semibold">Rooms</label>
        <div v-if="rooms.length > 0" class="w-full flex justify-center flex-col items-center gap-y-6">
            <div
                class="flex gap-x-6 gap-y-10 px-4 justify-center w-full items-center container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                <Room v-for="room in rooms.slice(0, limit || rooms.length)" :key="room.id" :room="room" />
            </div>
        </div>
        <label v-else class="text-5xl text-clay">No Room Found</label>
    </div>
</template>

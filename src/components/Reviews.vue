<script setup>
import { defineProps } from 'vue';

const props = defineProps(['reviews'])
</script>

<template>
    <div class="my-8 py-8 px-6 flex flex-col items-center bg-gray-900 text-clay">
        <div class="container w-full">
            <label class="text-xl font-semibold block mb-2">Reviews</label>
            <label class="text-2xl block text-white font-semibold">What Our Clients Say
            </label>
            <label class="text-xs max-w-2xl line leading-normal block mb-3">Discover the stories of those who have
                experienced
                818
                Resort
                Pagsanjan
                firsthand.
                Read accounts from our valued customers,
                recounting their unforgettable moments during their stay with us.</label>
            <label class="block text-center text-xl text-white font-semibold mb-4">72% recommend (261 Reviews)
            </label>
            <div class="flex justify-center gap-x-16 flex-wrap gap-y-4">
                <div v-for="review in reviews"
                    class="bg-black rounded text-white p-6 flex flex-col gap-y-3 justify-center items-center text-center shadow-xl w-96 bg-opacity-80 backdrop-blur-sm hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] ease-in-out duration-300">
                    <div class="flex gap-x-3 text-hot">
                        <i v-for="n in 5" :key="n" :class="review.rating >= n ? 'pi pi-star-fill' : 'pi pi-star'"></i>
                    </div>
                    <label>{{ review.comment }}</label>
                    <label class="font-bold">{{ review.name }}</label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps(['offers'])

</script>

<template>
    <div class="flex flex-col items-center w-full py-10 px-4 text-center"
        style="background-image:linear-gradient(rgba(128, 128, 128, 0.9), rgba(128, 128, 128, 0.9)), url(/screen.jpg) !important">
        <div class="container flex flex-col items-center justify-center gap-y-4">
            <label class="text-4xl font-semibold">Exclusive Offer</label>
            <div class="flex flex-col items-center border-4 border-black p-4 rounded-lg backdrop-blur-sm">
                <label class="font-semibold text-lg">{{ offers.name }}</label>
                <label class="text-sm font-medium">Hall not included</label>
                <div class="grid lg:grid-cols-4 gap-x-4 gap-y-6 mt-8 md:grid-cols-3 sm:grid-cols-3">
                    <div v-for="offer in offers.packages" :key="offer.id"
                        class="bg-black rounded p-4 bg-opacity-50 group hover:bg-hot hover:text-black ease duration-300 hover:animate-bounce">
                        <div class="flex flex-col justify-center items-center text-center">
                            <label class="text-xs">For as low as:</label>
                            <label class="text-3xl font-semibold">&#8369; {{ offer.price }}</label>
                            <label class="text-sm">{{ offer.info }}</label>
                            <label class="text-xs">{{ offer.time }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
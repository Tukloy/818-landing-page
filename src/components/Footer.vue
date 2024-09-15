<script setup>
import { defineProps } from 'vue';

const props = defineProps(
    {
        logo: String,
        details: Object,
        year: Number
    }
)


</script>

<template>
    <div class="bg-gray-900 p-4 text-clay flex justify-center">
        <div class="flex items-center justify-around flex-wrap gap-x-4 gap-y-4 container">
            <img class="w-32" :src="logo" alt="">
            <div class="flex flex-col">
                <label class="text-xl font-semibold text-white"><span class="text-hot">{{ details.resortName }}
                    </span> Resort</label>
                <label class="text-lg border-b-2 border-black">Pagsanjan Laguna</label>
            </div>
            <div class="flex flex-col gap-y-2">
                <div class="flex items-center gap-x-2">
                    <i class="pi pi-address-book bg-white text-black text-base rounded-full font-bold p-1"></i>
                    <div class="text-xs">
                        <label class="block">{{ details?.contactNo?.no1 }}</label>
                        <label class="block">{{ details?.contactNo?.no2 }}</label>
                    </div>
                </div>
                <div class="flex items-center gap-x-2">
                    <i class="pi pi-envelope bg-white text-black text-base rounded-full font-bold p-1"></i>
                    <div class="text-xs">
                        <label class="block">{{ details?.contactEmail?.email }}</label>
                        <a :href="details?.contactEmail?.email.website"
                            class="block hover:text-white linear duration-200">{{
                                details?.contactEmail?.website }}</a>
                    </div>
                </div>
                <div class="flex items-center gap-x-2">
                    <i class="pi pi-map-marker bg-white text-black text-base rounded-full font-bold p-1"></i>
                    <div class="text-xs">
                        <label class="block">{{ details?.address?.add1 }}</label>
                        <label class="block">{{ details?.address?.add2 }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-gray-950 p-4 text-sm flex justify-center">
        <div class="container flex justify-between">
            <div>
                <label>All Rights Reserved Created by: Rheyvince Lawrence Napay</label>
            </div>
            <div>
                <label>Copyrights @{{ year }} {{ details.resortName }} Resort</label>
            </div>
        </div>
    </div>
</template>
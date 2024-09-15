<script setup>
import { defineProps } from 'vue';

const props = defineProps(['wallpaper'])
</script>
<template>
    <div class="min-h-[70vh] flex justify-center items-center py-8 px-6">
        <div class="flex container rounded-xl items-center   overflow-hidden bg-gray-900 flex-wrap">
            <div class="flex flex-col gap-y-6 p-8">
                <label class="text-3xl font-semibold">About Us</label>
                <div class="flex flex-col gap-y-4 text-clay">
                    <label>Discover the Tranquil Paradise of 818 Resort</label>
                    <label>Are you ready for an unforgettable getaway? Imagine waking up to the serenity of lush rice
                        fields and a pristine forest, with the gentle morning dew kissing your skin. At 818 Resort, this
                        dream comes to life.</label>
                    <label>Start your day with a breathtaking breakfast overlooking the scenic beauty of nature. Let the
                        soothing breeze and the tranquil surroundings rejuvenate your soul.</label>
                    <label> Dive into our crystal-clear swimming pool and let the worries of the world melt away. Our
                        pool offers the perfect oasis to cool off and relax</label>
                    <label>Here's the best part - you can experience all of this at the most affordable rates in
                        Pagsanjan! Our cozy rooms for 2 people are available for only ₱1500, while our spacious Family
                        rooms for 6 people are just ₱3500. Plus, enjoy a free cottage (worth ₱500 FREE!) and 6pax
                        entrance free (worth ₱900 FREE!) when you avail the family room to make your stay even more
                        delightful</label>
                    <label>Book your escape to 818 Resort now and create memories that will last a lifetime. Don't miss
                        out on this incredible offer - your paradise awaits!</label>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Logo from '/logo.png'
import Background from '/background.jpg'
import GalleryWP from '/galleryWP.jpg'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { RouterView } from 'vue-router'
import Database from '@/data/database.json'
import { reactive, onMounted, ref } from 'vue';

const state = reactive({
  resortName: '',
  rooms: [],
  cottages: [],
  pools: [],
  details: [],
  offers: [],
  images: [],
  videoSource: '',
  reviews: []
})
const currentYear = ref(new Date().getFullYear());

onMounted(() => {
  state.resortName = Database.details.resortName
  state.pools = Database.pools
  state.rooms = Database.rooms;
  state.cottages = Database.cottages
  state.details = Database.details
  state.offers = Database.offers
  state.images = Database.images
  state.videoSource = '/video.mp4'
  state.reviews = Database.reviews
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

</script>
<template>
  <div class="text-white">
    <Navbar :logo="Logo" :resortName="state.resortName" />
    <div class="pt-20 bg-black">
      <RouterView :pools="state.pools" :rooms="state.rooms" :cottages="state.cottages" :bg="Background"
        :offers="state.offers" :videoSource="state.videoSource" :wallpaper="GalleryWP" :images="state.images"
        :reviews="state.reviews" :details="state.details" />
    </div>
    <Footer :logo="Logo" :details="state.details" :year="currentYear" />
  </div>
</template>
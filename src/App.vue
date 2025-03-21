<template>
  <div class="flex items-center justify-center">
  <div class="container">
    <Navbar />
    <router-view></router-view>
    <Footer /> <!-- Burada Footer olarak büyük harf ile kullanmalısınız -->
  </div>
</div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"; 
</script>

<style scoped>
</style>

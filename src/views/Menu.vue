<template>
    <div>
      <!-- Başlık Alanı -->
      <div
        class="text-center p-8 sm:p-12 rounded-b-3xl bg-gradient-to-r w-full from-gray-800 via-gray-700 to-gray-600 shadow-lg mb-20">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white drop-shadow-lg" data-aos="fade-down">
          Tüm Ürünler
        </h1>
      </div>
      <Card v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Card from '@/components/Card.vue'; // Card bileşenini içe aktarıyoruz
  
  const categories = ref([]);
  
  // API'den kategorileri almak için fonksiyon
  const fetchCategories = async () => {
    try {
      // API'den kategorileri alıyoruz
      const response = await axios.get('http://localhost:3000/categories');
      categories.value = response.data; // Verileri ref içinde saklıyoruz
    } catch (error) {
      console.error('Veri alınırken bir hata oluştu:', error);
    }
  };
  
  // Sayfa yüklendiğinde kategorileri çek
  onMounted(() => {
    fetchCategories();
  });
  </script>
  
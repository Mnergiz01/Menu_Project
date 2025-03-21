<template>
  <div>
    <!-- Başlık Alanı -->
    <div class="text-center p-8 sm:p-12 rounded-b-3xl mb-20">
      <h1
        class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black drop-shadow-lg border-l-2 border-r-2"
        data-aos="fade-down"
      >
        Tüm Ürünler
      </h1>
    </div>
    <Card :category="category" />
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

<style scoped>
/* Başlık için gölgelendirme efekti */
.drop-shadow-lg {
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}
</style>

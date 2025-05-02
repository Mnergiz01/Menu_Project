<template>
  <div class="container mx-auto px-4 py-10">
    <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white shadow-md rounded-xl p-6 mb-8"
      data-aos="fade-up"
    >
      <!-- Görsel -->
      <div class="shrink-0" data-aos="fade-right">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-110"
        />
      </div>

      <!-- Bilgi -->
      <div class="flex flex-col flex-grow" data-aos="fade-left">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
          <h2 class="text-xl sm:text-2xl font-bold text-gray-800">{{ product.name }}</h2>
          <div class="flex items-center text-lg font-semibold text-blue-600 mt-2 sm:mt-0">
            <hr class="w-12 border-t-2 border-gray-400 mr-2 hidden sm:block" />
            {{ product.price }} TL
          </div>
        </div>
        <p class="mt-3 text-gray-600 text-base leading-relaxed">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = ref([]);
const route = useRoute();
const categoryId = ref(route.params.id);

onMounted(async () => {
  AOS.init({ duration: 800, once: true });

  try {
    const response = await axios.get('/db.json');
    const categories = response.data.categories;
    const selectedCategory = categories.find(cat => cat.id === parseInt(categoryId.value));

    if (selectedCategory) {
      products.value = selectedCategory.products;
    }
  } catch (error) {
    console.error('Veri yüklenemedi:', error);
  }
});
</script>

<style scoped>
/* Ekstra özel stiller gerekirse eklenebilir */
</style>

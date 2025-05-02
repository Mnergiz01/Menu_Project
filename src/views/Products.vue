<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Üst Bilgi: Kategori -->
    <Product :category="category" v-if="category" />

    <!-- Ürünler -->
    <div v-if="category?.products?.length > 0" class="space-y-8 mt-10">
      <productBody :products="category.products" />
    </div>

    <!-- Ürün yoksa mesaj -->
    <p v-else class="text-center text-xl text-gray-600 my-12">
      Bu kategoriye ait ürün bulunamadı.
    </p>

    <!-- Geri Dön Butonu -->
    <div class="flex justify-center mt-10">
      <router-link to="/menu">
        <Back />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Product from '@/components/productUpper.vue';
import productBody from '@/components/productBody.vue';
import Back from '@/components/Back.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryId = route.params.id;
const category = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('/db.json');
    const categories = response.data.categories;
    const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));
    if (selectedCategory) {
      category.value = selectedCategory;
    } else {
      console.error('Kategori bulunamadı');
    }
  } catch (error) {
    console.error('Veri yüklenemedi:', error);
  }
});
</script>

<style scoped>
/* Gerekirse özel stiller burada eklenebilir */
</style>

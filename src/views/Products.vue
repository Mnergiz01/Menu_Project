<template>
  <div>
    <!-- Ürünlerin üst kısmı (Kategori Bilgisi) -->
    <Product :category="category" v-if="category" />
  
    <!-- Menüye geri dönme butonu -->
    <router-link to="/menu">
      <Back></Back>
    </router-link>
  
    <!-- Ürün Detayları (Body) -->
    <productBody :products="category?.products" v-if="category?.products?.length > 0" class="my-20" />
    <!-- Kategori bulunamazsa veya ürün yoksa mesaj -->
    <p v-else class="text-center text-xl">Bu kategoriye ait ürün bulunamadı.</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import Product from '@/components/productUpper.vue';
import productBody from '@/components/productBody.vue';
import Back from '@/components/Back.vue';
import { useRoute } from 'vue-router';

// route parametrelerini almak için useRoute
const route = useRoute();

// categoryId'yi alıyoruz
const categoryId = route.params.id;

// kategoriyi tutacak bir ref oluşturuyoruz
const category = ref(null);

// JSON dosyasını axios ile alıp, kategoriyi buluyoruz
onMounted(async () => {
  try {
    // db.json dosyasını ana dizinden çağırıyoruz
    const response = await axios.get('/db.json');  // Ana dizindeki db.json dosyasına erişim

    const categories = response.data.categories;

    // categoryId'ye göre ilgili kategoriyi buluyoruz
    const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId));

    // Kategoriyi bulduysak category state'ini güncelliyoruz
    if (selectedCategory) {
      category.value = selectedCategory;
    } else {
      // Eğer kategori bulunamazsa, uygun bir mesaj gösterilebilir.
      console.error('Kategori bulunamadı');
    }
  } catch (error) {
    console.error('Veri yüklenemedi:', error);
  }
});
</script>

<style scoped>
/* Stil ayarları burada yapılabilir */
</style>

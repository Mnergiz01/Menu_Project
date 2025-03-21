<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id"
      class="mt-10 flex flex-col sm:flex-row sm:space-x-4 mx-3 space-y-6 sm:space-y-0 mb-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <!-- Görsel Bölümü -->
      <div class="flex justify-center sm:justify-start" data-aos="fade-right" data-aos-duration="1000">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110"
        />
      </div>

      <!-- Ürün Bilgisi Bölümü -->
      <div class="block flex-grow" data-aos="fade-left" data-aos-duration="1000">
        <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <!-- Ürün Adı -->
          <div class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            {{ product.name }}
          </div>

          <!-- Fiyat Bölümü -->
          <div class="flex items-center text-lg sm:text-xl font-medium text-gray-700">
            <div class="flex items-center">
              <!-- Çizgi ve Fiyat -->
              <hr class="w-16 border-t-2 border-gray-600 mr-2" />
              <span>{{ product.price }} TL</span>
            </div>
          </div>
        </div>

        <!-- Ürün Açıklaması -->
        <div class="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
          {{ product.description }}
        </div>
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
const route = useRoute(); // Vue Router kullanarak route parametrelerini alıyoruz

// Kategori ID'sini almak
const categoryId = ref(route.params.id);

onMounted(async () => {
  // AOS animasyonlarını başlatıyoruz
  AOS.init({
    duration: 1000,
    once: true,
  });

  try {
    // db.json dosyasından veri çekiyoruz
    const response = await axios.get('/db.json');  // Verilerin olduğu JSON dosyasının yolu
    const categories = response.data.categories;
    
    // Kategori ID'ye göre ilgili ürünleri filtreliyoruz
    const selectedCategory = categories.find((cat) => cat.id === parseInt(categoryId.value));

    // Kategoriyi bulursak, ürünleri ayarlıyoruz
    if (selectedCategory) {
      products.value = selectedCategory.products;
    }
  } catch (error) {
    console.error('Veri yüklenemedi:', error);
  }
});
</script>

<style scoped>
/* Fotoğraf üzerinde hover efekti ile büyüme */
.transform {
  transition: transform 0.3s ease;
}
.hover\:scale-110:hover {
  transform: scale(1.1);
}
</style>

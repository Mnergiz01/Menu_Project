<template>
  <div>
    <div
      class="bg-gray-500 w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-between rounded-b-full"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <!-- Logo ve Başlık Bölümü -->
      <div class="flex flex-row justify-around w-full px-4">
        <!-- Logo -->
        <div data-aos="fade-right" data-aos-duration="1000">
          <img
            :src="categoryLogo"
            alt="Logo"
            class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-black rounded-full"
          />
        </div>

        <!-- Başlık -->
        <div class="flex items-center me-8" data-aos="fade-left" data-aos-duration="1000">
          <h1 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl underline font-stretch-ultra-condensed">
            {{ categoryName }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";

// Route parametrelerini alıyoruz
const route = useRoute();
const categoryName = ref("");
const categoryLogo = ref("");

// AOS'yi başlatıyoruz
onMounted(() => {
  AOS.init({
    duration: 1000, // Varsayılan animasyon süresi
    once: true, // Animasyon sadece bir kez yapılacak
  });

  // Route'den gelen kategori ID'sini alıyoruz
  const categoryId = route.params.id;

  // Burada örnek olarak `db.json` verilerinden kategoriye göre başlık ve logo bilgilerini çekiyoruz
  fetchCategoryData(categoryId);
});

// Kategori verilerini çekmek için fonksiyon
async function fetchCategoryData(categoryId) {
  try {
    // db.json dosyasını çekiyoruz
    const response = await fetch("/db.json");
    const data = await response.json();
    
    // Kategorileri buluyoruz
    const selectedCategory = data.categories.find(category => category.id === parseInt(categoryId));
    
    // Kategori bulunduysa, başlık ve logo bilgilerini güncelliyoruz
    if (selectedCategory) {
      categoryName.value = selectedCategory.name;
      categoryLogo.value = selectedCategory.image || "/default-logo.png"; // Logo varsa, yoksa varsayılan bir logo kullanıyoruz
    }
  } catch (error) {
    console.error("Veri yüklenemedi:", error);
  }
}
</script>

<style scoped>
/* Ekstra stil gerekmedikçe Tailwind ile tüm stil ayarları yapılmıştır */
</style>

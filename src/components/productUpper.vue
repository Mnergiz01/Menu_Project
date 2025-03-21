<template>
  <div>
    <div
      class="w-full h-50 sm:h-50 md:h-70 lg:h-150 flex items-center justify-between"
      :style="{
        backgroundImage: 'url(' + categoryLogo + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'brightness(0.7)',
         // Arka planın biraz kararması için filter ekledik
      }"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <!-- Logo ve Başlık Bölümü -->
      <div class="flex flex-row justify-around w-full px-4">
        <!-- Logo kısmı boş bırakıldı, gerektiğinde ekleyebilirsiniz -->
        <div data-aos="fade-right" data-aos-duration="1000"></div>

        <!-- Başlık -->
        <div class="flex items-end" data-aos="fade-left" data-aos-duration="1000">
          <h1 class="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl underline font-stretch-ultra-condensed text-shadow-lg">
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

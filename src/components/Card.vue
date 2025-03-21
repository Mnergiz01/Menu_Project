<template>
  <div class="space-y-10 mb-20">
    <!-- Ürün Kartları -->
    <div
      v-for="category in categories"
      :key="category.id"
      @click="goToProductPage(category.id)"
      class="flex flex-col sm:flex-row justify-between w-full p-6 sm:p-8 mt-6 rounded-3xl shadow-2xl cursor-pointer card"
      :style="{ backgroundImage: 'url(' + category.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <!-- Logo Bölümü (Sol Taraftan Gelmesi İçin AOS Ekleme) -->
      <div
        class="flex justify-center items-center mb-4 sm:mb-0"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <img :src="category.image" alt="Logo" class="w-20 sm:w-28 h-20 sm:h-28 rounded-full shadow-xl" />
      </div>

      <!-- Ürün Başlığı -->
      <div
        class="flex items-end justify-center sm:justify-start text-container"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h1 class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">{{ category.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS dosyasını ekledik

const router = useRouter();
const categories = ref([]); // Kategorileri tutmak için reaktif değişken

const goToProductPage = (categoryId) => {
  if (categoryId) {
    router.push({ name: 'Products', params: { id: categoryId } });
  } else {
    console.error('Kategori ID eksik veya geçersiz.');
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch('/db.json'); // Burada db.json dosyanızın yolu
    const data = await response.json();
    categories.value = data.categories;
  } catch (error) {
    console.error('Kategori verileri alınırken hata oluştu:', error);
  }
};

onMounted(() => {
  AOS.init();
  fetchCategories(); // Sayfa yüklendiğinde verileri al
});
</script>

<style scoped>
/* Gölgelendirme ve genel düzenlemeler */
.shadow-xl {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.shadow-2xl {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.2);
}

.drop-shadow-lg {
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

/* Hover özelliği */
.card {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.card:hover {
  transform: scale(1.05); /* Kartı büyütme */
  filter: blur(4px); /* Bulanıklaştırma efekti */
}

/* Yalnızca başlık kısmı büyüsün, kartın geri kalanı bulanıklaşmasın */
.card:hover .text-container h1 {
  transform: scale(1.1); /* Yazıyı büyütme */
  transition: transform 0.3s ease;
}
</style>

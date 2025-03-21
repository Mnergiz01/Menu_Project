<template>
    <div class="space-y-10 mb-20">
      <!-- Ürün Kartları -->
      <div
        @click="goToProductPage"
        class="flex flex-col sm:flex-row justify-between w-full p-6 sm:p-8 mt-6 rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-2xl cursor-pointer"
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
          class="flex items-end justify-center sm:justify-start"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1 class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">{{ category.name }} {{ category.id }}</h1>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; // AOS CSS dosyasını ekledik
  
  const router = useRouter();
  
  const goToProductPage = () => {
  if (props.category && props.category.id) {
    router.push({ name: 'Products', params: { id: props.category.id } });
  } else {
    console.error('Kategori ID eksik veya geçersiz.');
  }
};


  
  const props = defineProps({
    category: Object, // Kategori bilgilerini prop olarak alıyoruz
  });
  
  // Sayfa yüklendikten sonra AOS'u başlat
  onMounted(() => {
    AOS.init();
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
  </style>
  
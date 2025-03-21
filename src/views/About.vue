<template>
    <div class="container mx-auto my-12 px-4 h-screen flex items-center flex-wrap">
      <!-- Başlık ve Açıklama -->
      <div class="text-center mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800">Hakkımızda</h1>
        <p class="text-lg sm:text-xl text-gray-600 mt-4">
          Biz, kaliteli ve müşteri odaklı hizmetler sunan bir ekibiz. Amacımız, en iyi deneyimi sağlamak ve
          her zaman müşteri memnuniyetini ön planda tutmaktır.
        </p>
      </div>
  
      <!-- Hakkımızda Görseli ve İçeriği -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-12 sm:gap-24 mb-12">
        <div class="w-full sm:w-1/2" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="@/assets/logo.png"
            alt="About Us"
            class="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
  
        <div class="w-full sm:w-1/2 text-left" data-aos="fade-left" data-aos-duration="1000">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">Biz Kimiz?</h2>
          <p class="text-base sm:text-lg text-gray-600 mb-4">
            Ekibimiz, her biri alanında uzmanlaşmış profesyonellerden oluşmaktadır. Yenilikçi fikirlerle
            çalışan bir grup olarak, sürekli gelişim ve müşteri memnuniyetini hedefliyoruz.
          </p>
          <p class="text-base sm:text-lg text-gray-600 mb-4">
            Alanında lider şirketlerle işbirlikleri yaparak, en yüksek kalitede hizmet sunuyoruz. Ayrıca,
            çevreye duyarlı çözümler üreterek sürdürülebilirliği önemsiyoruz.
          </p>
        </div>
      </div>
  
      <!-- Ekibimiz Bölümü -->
      <div class="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">Ekibimiz</h2>
        <p class="text-lg sm:text-xl text-gray-600 mb-8">
          Ekibimiz, alanında uzman ve yaratıcı profesyonellerden oluşuyor. İşte bizimle tanışın:
        </p>
  
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  onMounted(() => {
    AOS.init({
      duration: 1000,  // Default animation duration
      once: true,      // Animations will only trigger once
    });
  });
  </script>
  
  <style scoped>
  /* Genel stil ayarları */
  .container {
    max-width: 100%;
    width: 100%;
  }
  
  h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    transition: all 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #2563eb;
  }
  
  /* Ekibimiz bölümündeki kartlar için stil */
  img {
    object-fit: cover;
  }
  </style>
  
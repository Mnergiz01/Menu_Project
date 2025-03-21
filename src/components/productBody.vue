<template>
    <div>
      <div
        class="mt-10 flex flex-col sm:flex-row sm:space-x-4 mx-3 space-y-6 sm:space-y-0 mb-20"
        v-for="i in 10"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <!-- Görsel Bölümü -->
        <div class="flex justify-center sm:justify-start" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="@/assets/logo.png"
            alt="Fotoğraf"
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full shadow-lg"
          />
        </div>
  
        <!-- Ürün Bilgisi Bölümü -->
        <div class="block flex-grow" data-aos="fade-left" data-aos-duration="1000">
          <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <!-- Ürün Adı -->
            <div class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
              Espresso
            </div>
  
            <!-- Fiyat Bölümü -->
            <div class="flex items-center text-lg sm:text-xl font-medium text-gray-700">
              <div class="flex items-center">
                <!-- Çizgi ve Fiyat -->
                <hr class="w-16 border-t-2 border-gray-600 mr-2" /> <!-- Çizgiyi ekledik -->
                <span>130 TL</span>
              </div>
            </div>
          </div>
  
          <!-- Ürün Açıklaması -->
          <div class="text-sm sm:text-base lg:text-lg text-gray-600 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, libero?
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  onMounted(() => {
    AOS.init({
      duration: 1000, // Default animation duration
      once: true, // Animations will only trigger once
    });
  });
  </script>
  
  <style scoped>
  /* Stil ayarları */
  .w-16 {
    transition: transform 0.3s ease;
  }
  .w-16:hover {
    transform: scale(1.1);
  }
  </style>
  
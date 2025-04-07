<template>
  <div class="container mx-auto my-12 px-4 min-h-screen flex flex-col">
    <!-- Başlık ve Açıklama -->
    <div class="text-center mb-12" data-aos="fade-down">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800">Hakkımızda</h1>
      <p class="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Biz, kaliteli ve müşteri odaklı hizmetler sunan bir ekibiz. Amacımız, en iyi deneyimi sağlamak ve
        her zaman müşteri memnuniyetini ön planda tutmaktır.
      </p>
    </div>

    <!-- Hakkımızda Görseli ve İçeriği -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 mb-16">
      <div class="w-full lg:w-1/2" data-aos="fade-right">
        <img
          src="@/assets/logo.png"
          alt="About Us"
          class="w-full rounded-lg shadow-lg object-cover max-h-96 mx-auto"
        />
      </div>

      <div class="w-full lg:w-1/2 text-left mt-8 lg:mt-0" data-aos="fade-left">
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

    
    
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});
</script>

<style scoped>
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

img {
  object-fit: cover;
}
</style>

<template>
    <div class="max-w-4xl mx-auto p-5 h-screen flex items-center justify-center flex-col gap-16">
      <h1 class="text-4xl font-bold mb-6 text-center" data-aos="fade-down" data-aos-duration="1000">İletişim</h1>
  
      <!-- Adres -->
      <div class="mb-6 w-full" data-aos="fade-up" data-aos-duration="800">
        <h2 class="text-2xl font-semibold text-gray-800">Adres:</h2>
        <p class="text-lg text-gray-700">1234 Örnek Mahallesi, No: 5, İstanbul, Türkiye</p>
      </div>
  
      <!-- Ev Telefonu -->
      <div class="mb-6 w-full" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
        <h2 class="text-2xl font-semibold text-gray-800">Ev Telefonu:</h2>
        <p class="text-lg text-gray-700">(0212) 555 55 55</p>
      </div>
  
      <!-- Cep Telefonu -->
      <div class="mb-6 w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 class="text-2xl font-semibold text-gray-800">Cep Telefonu:</h2>
        <p class="text-lg text-gray-700">+90 532 123 45 67</p>
      </div>
  
      <!-- Konum -->
      <div class="mb-6 w-full" data-aos="fade-up" data-aos-duration="1100" data-aos-delay="300">
        <h2 class="text-2xl font-semibold text-gray-800">Konum:</h2>
        <div class="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mt-4 shadow-lg">
          <iframe
            class="w-full h-full"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed/v1/place?q=İstanbul,+Türkiye&key=YOUR_GOOGLE_MAPS_API_KEY"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";
  
  export default {
    name: "Contact",
    setup() {
      onMounted(() => {
        AOS.init({
          duration: 1000,  // Default animation duration
          once: true, // Animations will only trigger once
        });
      });
    },
  };
  </script>
  
  <style scoped>
  /* İletişim sayfasına özel stiller */
  h2 {
    font-size: 1.5rem;
    color: #333;
  }
  
  p {
    font-size: 1.125rem;
    color: #555;
  }
  
  iframe {
    border-radius: 10px;
  }
  </style>
  
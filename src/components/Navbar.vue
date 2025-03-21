<template>
  <!-- Arkaplan Videosu -->
  <div class="relative w-screen bg-white text-black p-3 rounded-lg shadow-md">
    <!-- İçerik -->
    <div class="relative p-5">
      <div class="flex justify-between items-center mx-10 ">
        <!-- Title Section -->
        <div>
          <h1 class="text-3xl font-bold font-serif">Menu</h1>
        </div>

        <!-- Dropdown Button Section -->
        <div class="relative flex items-center">
          <button @click="toggleDropdown"
            class="p-3 rounded-md focus:outline-none border-b hover:bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
              <path fill="#000"
                d="M4.5 17.27q-.213 0-.356-.145T4 16.768t.144-.356t.356-.143h15q.213 0 .356.144q.144.144.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h15q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.77q-.213 0-.356-.143Q4 7.443 4 7.23t.144-.356t.356-.143h15q.213 0 .356.144T20 7.23t-.144.356t-.356.144z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Dropdown Menu with AOS Animation -->
      <div v-if="dropdownOpen" class="rounded-lg mx-10 mt-5 text-black transition duration-200 " data-aos="fade-down" data-aos-duration="500">
        <ul class="block font-serif space-y-4 mt-10 font-light transition-all duration-500 ease-in">
          <li class=" border-gray-300 border-b-[0.5px] pb-2" data-aos="fade-right" data-aos-delay="200">
            AnaSayfa
          </li>
          <li class=" border-gray-300 border-b-[0.5px] pb-2" data-aos="fade-right" data-aos-delay="400">
            Hakkımızda
          </li>
          <li class=" border-gray-300 border-b-[0.5px] pb-2" data-aos="fade-right" data-aos-delay="600">
            İletişim
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the dropdown open state
const dropdownOpen = ref(false);

// Toggle function for dropdown menu visibility
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Initialize AOS on component mount
onMounted(() => {
  AOS.init({
    duration: 1000, // Default animation duration
    once: false, // Allows animations to repeat on scroll
  });
});
</script>

<style scoped>
/* Özel stil eklemeye gerek yok, Tailwind ile tüm stil düzenlemeleri yapıldı */
</style>

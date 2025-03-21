<template>
    <div class="relative w-full h-screen">
        <!-- Arka Plan Videosu -->
        <video autoplay loop muted class="absolute top-0 left-0 w-full h-full object-cover blur-xs"
            src="@/assets/dondurma.mp4" type="video/mp4"></video>

        <!-- İçerik (videonun üzerine gelecek herhangi bir içerik) -->
        <div
            class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-50">
            <div class="text-center px-8 sm:px-16 md:px-24 lg:px-32">
                <p
                    class="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white drop-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
                    Maraş'ın Sıcak Gülümsemesi, Dondurmanın Soğuk Lezzeti!
                </p>
            </div>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mt-8 justify-center bg-auto">
               
                    <button @click="loginmenu"
                        class="border-2 border-white p-3 px-8 text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-110 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#fff" stroke-width="2"
                                d="M12 1v7c0 1.657-1.347 3-2.997 3H5.997A3 3 0 0 1 3 8V1m3 6V1m3 6V1M6 11v10.504C6 22.33 6.666 23 7.5 23c.828 0 1.5-.68 1.5-1.496V11m6 7v3.5a1.5 1.5 0 1 0 3-.005V15s3 0 3-3V7c0-3-2-5-6-5z" />
                        </svg>
                        <span>Menu</span>
                    </button>
                
                <button
                    class="border-2 border-white p-3 px-8 text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-110 flex items-center space-x-2">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path stroke-dasharray="64" stroke-dashoffset="64"
                                d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0" />
                                <animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform"
                                    begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate"
                                    values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12" />
                            </path>
                            <path stroke-dasharray="4" stroke-dashoffset="4"
                                d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1"
                                    values="4;0;0;4;4" />
                            </path>
                            <path stroke-dasharray="6" stroke-dashoffset="6"
                                d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                                <animate fill="freeze" attributeName="stroke-dashoffset"
                                    begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s"
                                    keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6" />
                            </path>
                        </g>
                    </svg>
                    <router-link to="/contact"> <span>Contact</span> </router-link>

                </button>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const loginmenu = () => {
    router.push({ name: "Menu" });
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
}

/* Animasyon Efektleri */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

/* Başlık Yazı Fontu */
p {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}

/* Butonlar için ikonlar biraz daha yakın olacak şekilde düzenlendi */
button svg {
    margin-right: 8px;
}

/* Butonlar üzerindeki hover efektleri */
button {
    transition: all 0.3s ease-in-out;
}

button:hover {
    background-color: white;
    color: #333;
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

button:hover svg {
    stroke: #333;
}
</style>

<template>
    <div>

        <Product></Product>
        <router-link to="/menu">
            <Back></Back>
        </router-link>

        <productBody class="my-20"></productBody>
        

    </div>
</template>

<script setup>
import Product from '@/components/productUpper.vue';
import productBody from '@/components/productBody.vue';
import Back from '@/components/Back.vue';


</script>
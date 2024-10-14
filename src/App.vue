<script setup>
import FooterVue from "./components/Footer.vue";
import HeaderVue from "./components/Header.vue";

</script>

<template>
  <div id="site" class="block">
    <HeaderVue/>
    <router-view></router-view>
    <FooterVue/>
  </div>
</template>

<style scoped>

</style>

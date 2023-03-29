<script setup>
import { ref, watch} from 'vue';
import Navigation from '../layouts/Navigation.vue';
import SideBar from '../layouts/sidebar/SideBar.vue';
import WorkingPanel from '../layouts/WorkingPanel.vue';
// import data from '../data/components/Components.json'
const data = ref([])
const prev = ref(true)


</script>

<template>
  <div class="accueil">
    <Navigation :prev="prev"/>
    <SideBar :data="data" :prev="prev"/>
    <WorkingPanel :data="data" :prev="prev"/>
  </div>
</template>

<style lang="scss">
  body,.accueil {
    margin: 0;
  }
  body{
    min-width: 950px;
    max-width: 1350px;
    background-image: url("../assets/hero-bg.png");
    font-family: Arial, Helvetica, sans-serif;
  }
  svg{
    cursor: pointer;
  }
</style>

<script setup>
import { ref, watch} from 'vue';
import Navigation from '../components/Navigation.vue';
import SideBar from '../components/sidebar/SideBar.vue';
import WorkingPanel from '../components/WorkingPanel.vue';
// import data from '../data/components/Components.json'
const data = ref([])


</script>

<template>
  <div class="accueil">
    <Navigation/>
    <SideBar :data="data"/>
    <WorkingPanel :data="data"/>
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

<script setup>
import Navigation from '../components/Navigation.vue';
import SideBar from '../components/sidebar/SideBar.vue';
import WorkingPanel from '../components/WorkingPanel.vue';


</script>

<template>
  <div class="accueil">
    <Navigation/>
    <SideBar/>
    <WorkingPanel/>
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
    font-family: 'Franklin Gothic Medium';
  }
  svg{
    cursor: pointer;
  }
</style>

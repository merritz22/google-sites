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
    background-image: url("../assets/hero-bg.png");
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  i{font-size: 20px;}
</style>

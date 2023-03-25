<script setup>
    import { ref } from 'vue';
    const bglink = ref('@/assets/pages/img/header-bg.jpg')
</script>

<template>
    <header class="masthead">
        <div class="container">
            <div class="masthead-subheading">Bienvenue au Studio!</div>
            <div class="masthead-heading text-uppercase">Commencez par editer du contenue</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#services">En savoir plus</a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
  background-image: url('../../assets/pages/img/header-bg.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
    }
</style>
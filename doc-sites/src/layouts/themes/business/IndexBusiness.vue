<script setup>
import Nav from './Nav.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Home from './sections/Home.vue';

</script>


<template>
    <div class="bg-business">
        <!-- navigation Links-->
        <Header/>
        <Nav/>
        <div class="text-dark">
            <Home/>
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.bg-business{
  background-image: linear-gradient(rgba(47, 23, 15, 0.65),
   rgba(47, 23, 15, 0.65)),
    url("@/assets/themes/business/img/bg.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  /* border: 2px solid red; */
  height: 100%;
  overflow: scroll;
}
</style>
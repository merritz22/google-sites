<script setup>
import Nav from './Nav.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Products from './sections/Products.vue'
import Store from './sections/Store.vue'

// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

</script>


<template>
    <div class="bg-business">
        <!-- navigation Links-->
        <Header/>
        <Nav/>
        <div class="text-dark">
            <Home/>
            <About/>
            <Products/>
            <Store/>
        </div>
        <Footer/>
    </div>
</template>

<style>
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


.page-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.section-heading {
  text-transform: uppercase;
}
.section-heading .section-heading-upper {
  display: block;
  font-size: 1rem;
  font-weight: 800;
}
.section-heading .section-heading-lower {
  display: block;
  font-size: 3rem;
  font-weight: 100;
}

@media (min-width: 992px) {
  .about-heading .about-heading-img {
    position: relative;
    z-index: 0;
  }
  .about-heading .about-heading-content {
    margin-top: -5rem;
    position: relative;
    z-index: 1;
  }
}

.cta {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: rgba(230, 167, 86, 0.9);
}
.cta .cta-inner {
  position: relative;
  padding: 3rem;
  margin: 0.5rem;
  border: 0.35rem solid rgba(245, 182, 101, 0.85);
}
.cta .cta-inner:before {
  border-radius: 0.5rem;
  content: "";
  position: absolute;
  top: -0.5rem;
  bottom: -0.5rem;
  left: -0.5rem;
  right: -0.5rem;
  border: 0.35rem solid rgba(245, 182, 101, 0.85);
  z-index: -1;
}

.bg-faded{
    background-color: rgb(245, 209, 159);
}

.intro {
  position: relative;
}
@media (min-width: 992px) {
  .intro .intro-img {
    width: 75%;
    float: right;
  }
  .intro .intro-text {
    left: 0;
    width: 60%;
    margin-top: 3rem;
    position: absolute;
  }
  .intro .intro-text .intro-button {
    width: 100%;
    left: 0;
    position: absolute;
    bottom: -2rem;
  }
}
@media (min-width: 1200px) {
  .intro .intro-text {
    width: 45%;
  }
}

.intro-button a{
  background-color: rgba(230, 167, 86);
}

</style>
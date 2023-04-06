<script setup>
import Nav from './Nav.vue';
import Header from './Header.vue';
import About from './sections/About.vue';
import Clients from './sections/Clients.vue';
import Contact from './sections/Contact.vue';
import Footer from './sections/Footer.vue';
import Portfolio from './sections/Portfolio.vue';
// import PortfolioPopUp from './sections/PortfolioPopUp.vue';
import Services from './sections/Services.vue';
import Team from './sections/Team.vue';


window.addEventListener('DOMContentLoaded', event => {

// Navbar shrink function
var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink);

// Activate Bootstrap scrollspy on the main nav element
const mainNav = document.body.querySelector('#mainNav');
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: 74,
    });
};

// Collapse responsive navbar when toggler is visible
const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});

});
</script>

<template>
    <div class="container-themes bg-light">
        <!-- navigation Links-->
        <Nav/>
        <div class="container-themes-body">
            <!-- Header Page -->
            <Header/>
            <!-- Services Page -->
            <Services/>
            <!-- Portfolio Page -->
            <Portfolio/>
            <!-- About page -->
            <About/>
            <!-- Team Page -->
            <Team/>
            <!-- Clients Link -->
            <Clients/>
            <!-- Contact Us Page -->
            <Contact/>
            <!-- Footer Page -->
            <Footer/>
        </div>
    </div>
</template>

<style scoped>
.container-themes{
    /* border: 2px solid blue; */
    overflow-y: hidden;
    height: 100%;
    width: 100%;
}
.container-themes-body{
    /* border: 2px solid blue; */
    overflow-y: scroll;
    height: 95%;
    width: 100%;
}
</style>
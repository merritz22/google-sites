<script setup>
    import Nav from '../components/themes/agency/Nav.vue';
    import Header from '../components/themes/agency/Header.vue';
    import Services from '../components/themes/agency/sections/Services.vue';
    import Portfolio from '../components/themes/agency/sections/Portfolio.vue';
    import About from '../components/themes/agency/sections/About.vue';
    import Team from '../components/themes/agency/sections/Team.vue';
    import Clients from '../components/themes/agency/sections/Clients.vue';
    import Contact from '../components/themes/agency/sections/Contact.vue';
    import Footer from '../components/themes/agency/sections/Footer.vue';


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
    <!-- navigation Links-->
    <Nav/>
    <div class="container-themes bg-light">
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
</template>

<style>
    .container-themes{
        overflow-y: scroll;
        height: 100%;
        width: fit-content;
    }
</style>
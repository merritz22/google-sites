<script setup>
    import { ref } from 'vue';
    import StartupImage from '../../../components/images/StartupImage.vue';

    const editor = ref(true)
    const links = ref([
        'services','portfolio','about','team','contact'
    ])

    function updateNavLink(e) {
        links.value[links.value.indexOf(e.target.id)] = e.target.value
    }
</script>

<template>
    <div>
        <div v-if="!editor" class="navbar navbar-expand-lg navbar-dark bg-dark fixed" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">
                    <StartupImage :id="'fff'"/>
                    Here's M<label class="text-danger">e</label>KA template
                </a>
                <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li v-for="link in links" :key="link" class="nav-item">
                            <a class="nav-link" >
                                {{link}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div v-if="editor" class="navbar navbar-expand-lg navbar-dark bg-dark fixed" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">
                    <img id="nav" src="../../../assets/logo.png"  alt="..." />
                    Here's M<label class="text-danger">e</label>KA template
                </a>
                <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li v-for="link in links" :key="link" class="nav-item">
                            <input class="nav-link bg-transparent border-0 text-center"
                            @change="updateNavLink"
                            :value="link" :id="link"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input{
        width: 120px;
        outline: none;
    }
</style>
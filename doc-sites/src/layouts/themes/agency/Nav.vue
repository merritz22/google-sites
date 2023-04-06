<script setup>
    import { ref } from 'vue';
    import Input from '../../../components/tags/Input.vue'
    import StartupImage from '../../../components/images/StartupImage.vue';

    const props = defineProps({
        
    })

    const editor = ref(false)
    const links = ref([
        'services','portfolio','about','team','contact'
    ])

    function updateNavLink(e) {
        links.value[links.value.indexOf(e.target.id)] = e.target.value
    }
</script>

<template>
    <div>
        <div class="navbar navbar-expand-lg navbar-dark bg-dark fixed" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">
                    <StartupImage :id="'fff'"/>
                    <label class="text-light" v-if="editor">MeKA template</label>
                    <Input :text="'MeKA template'" class="text-light" v-if="!editor"/>
                </a>
                <button class="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <Input :text="'Menu'" class="text-light" v-if="!editor"/>
                    <label v-if="editor">Menu</label>
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li v-for="link in links" :key="link" class="nav-item">
                            <Input :text="link" class="nav-link" v-if="!editor"/>
                            <a class="nav-link" v-if="editor">
                                {{link}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    input{
        width: 150px;
        outline: none;
    }
</style>
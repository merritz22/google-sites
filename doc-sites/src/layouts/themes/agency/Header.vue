<script setup>
    import { ref } from 'vue';
    const data = ref({
        "subheading":"Bienvenue au studio",
        "heading":"editez du contenue",
        "link":"En savoir plus",
    })
    const editor = ref(true)

    function updateSubHeading(e) {
        // alert(e.target.value)
        data.value.subheading = e.target.value
    }
    function updateHeading(e) {
        // alert(e.target.value)
        data.value.heading = e.target.value
    }
    function updateLinkText(e) {
        // alert(e.target.value)
        data.value.link = e.target.value
    }
</script>

<template>
    <header v-if="!editor" class="masthead">
        <div class="container">
            <div class="masthead-subheading">{{ data.subheading }}</div>
            <div class="masthead-heading text-uppercase">{{data.heading}}</div>
            <a class="btn btn-primary btn-xl text-uppercase" 
                href="#services">
                {{ data.link }}
            </a>
        </div>
    </header>
    <header v-if="editor" class="masthead">
        <div class="container">
            <input class="masthead-subheading bg-transparent border-0 text-light text-center" 
            @change="updateSubHeading"    
            type="text" :value="data.subheading"/>
            <br>
            <input class="masthead-heading text-uppercase bg-transparent border-0 text-light text-center" 
            @change="updateHeading"    
            type="text" :value="data.heading"/>
            <br>
            <input class="btn btn-primary btn-xl text-uppercase border-0 text-light" 
            @change="updateLinkText"    
            type="text" :value="data.link"/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
  background-image: url('../../../assets/pages/img/header-bg.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
    }
    input{
        outline: none;
        width: fit-content;
    }
</style>
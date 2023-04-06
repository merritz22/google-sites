<script setup>
    import { ref, defineEmits } from 'vue';


    const emit = defineEmits(['load-themes-data'])

    function loadTheme(e) {
        // chargement du style et du texte depuis le backend.
        const style = {}
        const data = ref({
            "header":[
                {"subheading":"Bienvenue au studio"},
                {"heading":"editez du contenue"},
                {"link":"En savoir plus"},
            ],
            "nav":['Services','Portfolio','About','Team','Contact'],
            "section":
                [
                    {
                        "title":{
                            "title":"Section Title",
                            "subtitle":"Lorem ipsum dolor sit amet consectetur."
                        },
                        "body":[
                                {"title":"A title Here"},
                                {"body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
                            ]
                    }
                ]
        })

        //puis emmition de celles ci vers la zone de travaille ou elle seront chargees.
        emit('load-themes-data',data.value)
    }
    
</script>

<template>
    <div>
        <div class="card m-2 text-bg-dark" @click="loadTheme">
            <img src="@/assets/themes/agency/header-bg.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/coming-soon/img/bg-mobile-fallback.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/creative-gh/img/bg-masthead.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/blog/img/home-bg.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/landing/img/bg-masthead.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/stylish-portfolio/img/bg-callout.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/business/img/bg.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
        <div class="card m-2 text-bg-dark" >
            <img src="@/assets/themes/grayscale/img/bg-masthead.jpg" 
            class="card-img" alt="toto">
            <div class="card-img-overlay">
                <p class="card-text m-4">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
            </div>
        </div>
    </div>
</template>
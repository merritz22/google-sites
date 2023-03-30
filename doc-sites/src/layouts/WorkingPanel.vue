<script setup>
    import { ref } from 'vue';
    import ButtonComponent from './working-panel-components/ButtonComponent.vue';
    import Router from './working-panel-components/Router.vue';
    import Themes from './Themes.vue';

    const props = defineProps({
        data:{
            type:Object,
            required:true,
            computed:{
                changed(){
                    return data
                }
            }
        },
        prev:{
            type:Boolean,
            required:true,
            computed:{
                changed(){
                    return this.prev
                }
            }
        },
        mainClass:{
            type:String,
            required:true
        }
    })

    const components = ref(props.data)

    // custom represente le type de contenue a rendre
    // 0 => une page definit soit meme
    // 1,2,.. => represente une page customizer par theme (1,2,..)
    const custom = ref(1)

    function myEvent(e) {
        // console.log(e.el)
    }

</script>

<template>
    <div :class="mainClass">
        <section v-if="custom == 0" class="lab-panel bg-light">
            <Router v-for="component in components"
            v-bind:key="component.id" 
            :data="component"/>
        </section>
        <section v-if="custom == 1" class="lab-panel border-1" 
        id="theme-section">
            <Themes />
        </section>
        <section v-if="custom == 2"></section>
        <section v-if="custom == 3"></section>
        <section v-if="custom == 4"></section>
    </div>
</template>

<style lang="scss">
    .working-tab{
        margin-top: 70px;
        margin-left: 275px;
        position: fixed;
        width: 79%;
        height: 90%;
        border: 2px solid red;
        transition: 1.5s ease all;
    }
    .working-tab-off{
        margin: 0;
        width: 100%;
        height: 100%;
        border: 2px solid red;
        position: fixed;
        transition: 1.5s ease all;
    }
    .lab-panel{
        display: block;
        position: relative;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        transition: 1.5s ease all;
        // opacity: .35;
        text-align: center;
        // overflow: hidden;
        color: white;
        border: 4px solid white;
        #nav{
            width: 30px;
            height: 30px;
            transition: 0.5s ease all;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
    
</style>
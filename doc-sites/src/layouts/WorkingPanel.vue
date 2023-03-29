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
    <section v-if="custom == 0" class="lab-panel">
        <ButtonComponent @vnode-mounted="myEvent"/>
        <Router v-for="component in components" 
            :data="component"/>
    </section>
    <section v-if="custom == 1" class="lab-panel border-1" id="theme-section">
        <Themes/>
    </section>
    <section v-if="custom == 2"></section>
    <section v-if="custom == 3"></section>
    <section v-if="custom == 4"></section>
</template>

<style lang="scss">
    .preview{
        margin: 0;
    }
    .lab-panel{
        display: block;
        margin-top: 70px;
        margin-left: 275px;
        position: fixed;
        border-radius: 10px;
        width: 79%;
        height: 78%;
        background-color: none;
        transition: 1.5s ease all;
        // opacity: .35;
        text-align: center;
        // overflow: hidden;
        color: white;
        #nav{
            width: 30px;
            height: 30px;
            transition: 0.5s ease all;
            margin-left: 16px;
            margin-right: 16px;
        }
    }
    
</style>
<script setup>
    import { ref } from 'vue';
    import ButtonComponent from './working-panel-components/ButtonComponent.vue';
    import Router from './working-panel-components/Router.vue';
    

    const props = defineProps({
        data:{
            type:Object,
            required:true,
            computed:{
                changed(){
                    return data
                }
            }
        }
    })

    const components = ref(props.data)

    function myEvent(e) {
        // console.log(e.el)
    }

</script>

<template>
    <section class="lab-panel">
        <ButtonComponent @vnode-mounted="myEvent"/>
        <Router v-for="component in components" 
            :data="component"/>
    </section>
</template>

<style lang="scss" scoped>
    .lab-panel{
        display: block;
        margin-top: 70px;
        margin-left: 275px;
        position: fixed;
        border-radius: 5px;
        width: 900px;
        height: 90%;
        background-color: #ffff;
        transition: 1.5s ease all;
        // opacity: .35;
        text-align: center;
        overflow-y: scroll;
    }
</style>
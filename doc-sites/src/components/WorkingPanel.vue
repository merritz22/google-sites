<script setup>
    import { ref } from 'vue';
    import ButtonComponent from './working-panel-components/ButtonComponent.vue';
    import TextComponent from './text-editor-panel/TextComponent.vue';
    import textCD from '../data/components/TextComponents.json'
    
    const components = ref(textCD)

    function myEvent(e) {
        console.log(e.el)
    }

</script>

<template>
    <section class="lab-panel">
        <ButtonComponent @vnode-mounted="myEvent"/>
        <TextComponent v-for="component in components" :data="component.data"/>
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
    }
</style>
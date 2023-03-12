<script setup>
    import ButtonComponent from './working-panel-components/ButtonComponent.vue';
    import TextComponent from './text-editor-panel/TextComponent.vue';
</script>

<template>
    <section class="lab-panel">
        <ButtonComponent/>
        <TextComponent/>
    </section>
</template>

<style lang="scss" scoped>
    .lab-panel{
        display: block;
        margin-top: 70px;
        margin-left: 275px;
        position: fixed;
        border-radius: 5px;
        width: 700px;
        height: 90%;
        background-color: #ffff;
        transition: 1.5s ease all;
        // opacity: .35;
        text-align: center;
    }
</style>
<script setup>
    import ButtonComponent from './working-panel-components/ButtonComponent.vue';
</script>

<template>
    <section class="lab-panel">
        <ButtonComponent/>
    </section>
</template>

<style lang="scss" scoped>
    .lab-panel{
        margin-top: 70px;
        margin-left: 275px;
        position: fixed;
        border: 2px solid blue;
        width: 700px;
        height: 90%;
        background-color: rgb(75, 73, 73);
        transition: 1.5s ease all;
        opacity: .35;
    }
</style>
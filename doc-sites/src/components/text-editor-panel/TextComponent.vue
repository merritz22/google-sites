<script setup>
    import TextEditor from './TextEditor.vue';

    const showEditorPanel = true

</script>

<template>
    <TextEditor v-show="showEditorPanel"/>
    <input type="text" value="Your website title"/>
</template>

<style lang="scss" scoped>
    input{
        font-size: 60px;
        background: none;
        border: none;
        text-transform: uppercase;
    }
</style>
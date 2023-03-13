<script setup>
    import { ref } from 'vue';
    import TextEditor from './TextEditor.vue';
    import textData from '../../data/working-panel-data/textData.json';

    const showEditorPanel = ref(true)
    const isdraggable = true
    const textD = ref(textData)

    function showTextEditor(){
        showEditorPanel.value = true
    }

    function hideTextEditor(){
        showEditorPanel.value = false
    }
</script>

<template>
    <div class="text-editor-panel" :draggable="isdraggable">
        <TextEditor v-show="showEditorPanel"/>
        <input
            type="text" 
            value="Your website title"/>
    </div>
</template>

<style lang="scss" scoped>
    input{
        font-size: 60px;
        background: none;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .text-editor-panel{
        display: block;
        width: fit-content;
    }
</style>
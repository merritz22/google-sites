<script setup>
    import { ref } from 'vue';
    import TextEditor from './TextEditor.vue';
    import textData from '../../data/working-panel-data/textData.json';

    const showEditorPanel = true
    const textD = ref(textData)

    let css = ""

    const fontSizeEvent = (e)=>{
        css = 'font-size-'.concat(textD.value[0].fontSize)
        e.target.className += css.concat(' ')
        console.log(e.target)
    }
</script>

<template>
    <TextEditor v-show="showEditorPanel"/>
    <input @click="fontSizeEvent" type="text" value="Your website title"/>
</template>

<style lang="scss" scoped>
    input{
        font-size: 60px;
        background: none;
        border: none;
        text-transform: uppercase;
    }

    .font-size-76{
        font-size: 12px;
    }
    .font-size-76{
        font-size: 40px;
    }
</style>
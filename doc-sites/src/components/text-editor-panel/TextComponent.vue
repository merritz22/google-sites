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

    function jsonToString() {
        // using value sending by props as data between component
        if (textD.value.fontFamily != undefined) {
            return 'font-family: "'+textD.value.fontFamily+'";'
                +'font-size: '+textD.value.fontSize+';'
                +'font-weight: '+textD.value.fontWeight+';'
                +'font-style: '+textD.value.fontStyle+';'
                +'text-decoration: '+textD.value.textDecoration+';'
                +'color: '+textD.value.color+';'
                +'text-align: '+textD.value.textAlign+';'
        } else {
            // using default props
            return 'font-family: "'+textD.value[0].fontFamily+'";'
                +'font-size: '+textD.value[0].fontSize+';'
                +'font-weight: '+textD.value[0].fontWeight+';'
                +'font-style: '+textD.value[0].fontStyle+';'
                +'text-decoration: '+textD.value[0].textDecoration+';'
                +'color: '+textD.value[0].color+';'
                +'text-align: '+textD.value[0].textAlign+';'
        }
    }
</script>

<template>
    <div class="text-editor-panel" :draggable="isdraggable">
        <TextEditor v-show="showEditorPanel"/>
        <input
            type="text" 
            value="Your website title"
            :style="jsonToString()"/>
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
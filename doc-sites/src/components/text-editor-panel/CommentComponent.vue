<script setup>
    import { ref } from 'vue';
    import TextEditor from './TextEditor.vue';

    const props = defineProps({
        data:{
            type:Object,
            required:true,
            computed:{
                changed(){
                    return this.data
                }
            }
        },
        type:{
            type:String,
            required:true
        }
    })

    const showEditorPanel = ref(true)
    const isdraggable = true
    const textD = ref(props.data)
    console.log(textD.value)

    function showTextEditor(e){
        showEditorPanel.value = true && e
    }


    function jsonToString() {
        // console.log(textD.value.fontSize)
        return 'font-family: '+textD.value.fontFamily+';'
                +'font-size: '+textD.value.fontSize+'px;'
                +'font-weight: '+textD.value.fontWeight+';'
                +'font-style: '+textD.value.fontStyle+';'
                +'text-decoration: '+textD.value.textDecoration+';'
                +'color: '+textD.value.color+';'
                +'text-align: '+textD.value.textAlign+';'
    }
</script>

<template>
    <div class="text-editor-panel" :draggable="isdraggable">
        <TextEditor v-show="showEditorPanel" :data="data"/>
        <textarea
            type="text" 
            value="Your text"
            @focusin="showTextEditor(true)"
            @focusout="showTextEditor(false)"
            :style="jsonToString()"></textarea>
    </div>
</template>

<style lang="scss" scoped>
    input{
        font-size: 30px;
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
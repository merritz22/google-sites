<script setup>
    import { Icon } from '@iconify/vue';
    import { ref, defineEmits } from 'vue';
    import bolds from '../../data/working-panel-data/bolds.json'
    import italics from '../../data/working-panel-data/italic.json'
    import decorations from '../../data/working-panel-data/decoration.json'
    import FontFamily from '../font/FontFamily.vue'
    import FontSize from '../font/FontSize.vue';
    import TextAlign from '../font/TextAlign.vue';


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
    const color = ref('')
    const boldId = ref(0)
    const italicId = ref(0)
    const underlineId = ref(0)
    const textD = ref(props.data)
    const showFontsList = ref(false)
    const showFontsSize = ref(false)
    const textA = ref(false)
    const emit = defineEmits(['update-font-family'])


    function switches() {
        showFontsList.value = !showFontsList.value
    }

    function switchesSizes() {
        showFontsSize.value = !showFontsSize.value
    }

    function switchesTA() {
        textA.value = !textA.value
    }

    function font(e,f) {
        textD.value.fontFamily = e
        f.value != f.value
        showFontsList.value = f.value
    }

    function updateFontSize(e,f) {
        textD.value.fontSize = e
        f.value != f.value
        showFontsSize.value = f.value
    }

    function nextBold() {
        boldId.value++
        textD.value.fontWeight = bolds.bold[boldId.value%bolds.bold.length]
        // console.log(textD.value.fontWeight)
    }

    function nextItalic() {
        italicId.value++
        textD.value.fontStyle = italics.italic[italicId.value%italics.italic.length]
        // console.log(textD.value.fontStyle)
    }

    function nextDecoration() {
        underlineId.value++
        textD.value.textDecoration = decorations.decoration[underlineId.value%decorations.decoration.length]
        // console.log(textD.value.textDecoration)
    }

    function chooseColor(e) {
        console.log(e)
        document.querySelector('.color'+e).click()
    }

    function changeFontColor(e) {
        textD.value.color = e.target.value
        color.value = e.target.value
    }

    function textAlignSelected(e,f) {
        textD.value.textAlign = e
        f.value != f.value
        textA.value = f.value
    }

</script>

<template>
    <div class="text-style-panel" >
        <div class="title">
            <input class="title-name" type="text" :value="textD.name">
        </div>
        <div class="font-style">
            <FontFamily class="font-family-style"
                :data="data"
                :share="showFontsList" 
                @changed-font-family="font"/>
            <Icon @click="switches"
                v-show="!showFontsList" 
                icon="ic:round-arrow-drop-down" 
                width="30" height="30" />
            <Icon @click="switches"
                v-show="showFontsList" 
                icon="ic:round-arrow-drop-up" 
                width="30" height="30" />
        </div>
        <div @click="fontSizeEvent" class="font-size">
            <FontSize :size="showFontsSize"
                :data="data"
                @font-size-selected="updateFontSize"/>
            <Icon @click="switchesSizes"
                v-show="!showFontsSize" 
                icon="ic:round-arrow-drop-down" 
                width="30" height="30" />
            <Icon @click="switchesSizes"
                v-show="showFontsSize" 
                icon="ic:round-arrow-drop-up" 
                width="30" height="30" />
        </div>
        <div class="style-sparkles">
            <div class="font-bold">
                <Icon icon="ph:text-b-bold" 
                    @click="nextBold"
                    width="25" height="25" />
            </div>
            <div class="font-italic">
                <Icon icon="ph:text-italic-bold"
                    @click="nextItalic" 
                    width="25" height="25" />
            </div>
            <div class="font-underline">
                <Icon icon="ph:text-underline" 
                    @click="nextDecoration"
                    width="25" height="25" />
            </div>
            <div class="font-color">
                <Icon icon="ic:round-format-color-text" 
                    @click="chooseColor(textD.id)"
                    :color="color"
                    width="25" height="25" />
                <input v-show="false" 
                    type="color"
                    @change="changeFontColor" 
                    :class="'color'+textD.id">
            </div>
        </div>
        <div class="text-display">
            <TextAlign :position="textA"
                :data="data"
                @text-align-selected="textAlignSelected"/>
            <Icon icon="ic:round-arrow-drop-down" 
                @click="switchesTA"
                v-show="!textA"
                width="30" height="30" />
            <Icon icon="ic:round-arrow-drop-up" 
                @click="switchesTA"
                v-show="textA"
                width="30" height="30" />
        </div>
        <div class="bin">
            <Icon icon="fluent-mdl2:delete" width="25" height="25" color="red" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .text-style-panel{
        background-color: rgb(192, 191, 188);
        display: flex;
        width: fit-content;
        padding: 10px;
        height: fit-contentn;
        border: none;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        transition: 2s ease all;
        

        .text-display,.font-size{
            width: 50px;
        }

        .bin{
            border: none;
            width: fit-content;
        }

        &>div{
            width: 100px;
            display: flex;
            justify-content: space-between;
            border-right: .5px solid rgb(39, 38, 38);
            height: 99%;
            margin-left: 5px;
            cursor: pointer;
        }

        .style-sparkles{
            display: flex;
            justify-content: space-between;
            width: 150px;
        }

        .title-name{
            width: 90%;
            font-size: 18px;
            border: none;
            background: none;
            outline: none;
        }

        .font-style{
            width: 150px;
        }
        .font-family-style{
            width: 70%;
            background: none;
            border: none;
            font-size: 18px;
        }

        .font-size{
            width: 60px;
            font-size: 18px;
        }
    }
</style>
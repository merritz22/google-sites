<script setup>
    import { Icon } from '@iconify/vue';
    import { ref, defineEmits } from 'vue';
    import textData from '../../data/working-panel-data/textData.json';
    import FontFamily from '../font/FontFamily.vue'


    const textD = ref(textData)
    const showFontsList = ref(false)
    const emit = defineEmits(['update-font-family'])

    function switches(e) {
        showFontsList.value = !showFontsList.value
    }

    function font(e,f) {
        textD.value.fontFamily = e
        f.value != f.value
        showFontsList.value = f.value
    }

</script>

<template>
    <div class="text-style-panel" >
        <div class="title">
            <input class="title-name" type="text" value="Title1">
        </div>
        <div class="font-style">
            <FontFamily class="font-family-style"
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
            64 <Icon icon="ic:round-arrow-drop-down" width="30" height="30" />
        </div>
        <div class="style-sparkles">
            <div class="font-bold">
                <Icon icon="ph:text-b-bold" width="25" height="25" />
            </div>
            <div class="font-italic">
                <Icon icon="ph:text-italic-bold" width="25" height="25" />
            </div>
            <div class="font-underline">
                <Icon icon="ph:text-underline" width="25" height="25" />
            </div>
            <div class="font-color">
                <Icon icon="ic:round-format-color-text" width="25" height="25" />
            </div>
        </div>
        <div class="text-display">
            <Icon icon="ph:text-align-left" width="25" height="25" /><Icon icon="ic:round-arrow-drop-down" width="25" height="25" />
        </div>
        <div class="bin">
            <Icon icon="fluent-mdl2:delete" width="25" height="25" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .text-style-panel{
        background-color: #8bd8f1;
        display: flex;
        width: fit-content;
        padding: 10px;
        height: 25px;
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
    }
</style>
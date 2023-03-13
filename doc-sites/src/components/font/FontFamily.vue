<script setup>
    import { ref, defineEmits } from 'vue';
    import fontfamilies from '../../data/working-panel-data/font-family.json';
    import textD from '../../data/working-panel-data/textData.json'

    const props = defineProps({
        share:{
            type: Boolean,
            required: true,
            computed:{
                changed(){
                    return !share
                }
            }
        }
    })

    const emit = defineEmits(['changed-font-family'])

    const family = ref(textD[0].fontFamily)
    const showFonts = ref(props.share)

    function fontFamilySelected(e) {
        family.value = e.target.innerText
        showFonts.value = false
        emit('changed-font-family',family,showFonts)
    }
</script>

<template>
    <div class="select font-family-style" :style="'font-family: \''+family">
        <div class="options" v-show="share">
            <p v-for="font in fontfamilies.families"
                :style="'font-family: \''+font"
                @click="fontFamilySelected"
                >{{font}}</p>
        </div>
        {{ family }}
    </div>
</template>

<style lang="scss" scoped>
    .select{
        width: 80%;
        height: 25px;
        overflow: hidden;
    }
    .options{
        background-color: #8bd8f1;
        position: absolute;
        margin-top: 40px;
        width: 150px;
        border-radius: 10px;
        width: 250px;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        text-align: left;
        padding-left: 10px;
        font-size: 18px;
        &>p{
            border-bottom: 2px solid #000;
        }
    }
</style>
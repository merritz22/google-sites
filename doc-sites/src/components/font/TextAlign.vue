<script setup>
    import { Icon } from '@iconify/vue';
    import { ref, defineEmits } from 'vue';
    import textD from '../../data/working-panel-data/textData.json'

    const props = defineProps({
        data:{
            type:Object,
            required:true,
            computed:{
                changed(){
                    return data
                }
            }
        },
        position:{
            type: Boolean,
            required: true,
            computed:{
                changed(){
                    return !this.position
                }
            }
        }
    })

    // console.log(props.data)
    const emit = defineEmits(["text-align-selected"])
    const selected = ref(props.position)
    const texta = ref(props.data.textAlign)

    function updateTextAlign(e) {
        texta.value = e
        selected.value = false
        emit("text-align-selected",texta,selected)
        // console.log(e)
    }

</script>

<template>
    <div class="select">
        <div class="options" v-show="position">
            <div @click="updateTextAlign('left')"><Icon icon="ph:text-align-left" width="25" height="25" /></div>
            <div @click="updateTextAlign('right')"><Icon icon="ph:text-align-right" width="25" height="25" /></div>
            <div @click="updateTextAlign('center')"><Icon icon="ph:text-align-center" width="25" height="25" /></div>
            <div @click="updateTextAlign('justify')"><Icon icon="ph:text-align-justify" width="25" height="25" /></div>
        </div>
        <Icon :icon="'ph:text-align-'+texta" width="25" height="25" />
    </div>
</template>

<style lang="scss" scoped>
    .select{
        width: 80%;
        height: 25px;
        overflow: hidden;
    }
    .options{
        background-color: rgb(192, 191, 188);
        position: absolute;
        margin-top: 40px;
        width: fit-content;
        border-radius: 5px;
        height: fit-content;
        padding: 10px;
        text-align: center;
        &>p{
            border-bottom: 2px solid #000;
        }

        &:hover{
            
        }
    }
</style>
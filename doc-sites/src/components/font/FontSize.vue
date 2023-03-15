<script setup>
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
        size:{
            type: Boolean,
            required: true,
            computed:{
                changed(){
                    return !this.size
                }
            }
        }
    })

    const emit = defineEmits(["font-size-selected"])
    const sizes = ref(Array.from({ length: 150 }, (value, index) => index))
    const selected = ref(props.size)
    const s = ref(props.data.fontSize)

    function fontSizeUpdated(e) {
        s.value = e.target.innerHTML
        selected.value = false
        emit("font-size-selected",s,selected)
    }

</script>

<template>
    <div class="select" :style="'font-size: \''+s">
        <div class="options" v-show="size">
            <p v-for="size in sizes"
                :style="'font-size: '+size+'px;'"
                @click="fontSizeUpdated"
                >
                {{ size +9}}
            </p>
        </div>
        {{ s }}
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
        width: 200px;
        border-radius: 5px;
        height: 500px;
        overflow-y: scroll;
        overflow-x: hidden;
        text-align: center;
        font-size: 18px;
        &>p{
            border-bottom: 2px solid #000;
        }
    }
</style>
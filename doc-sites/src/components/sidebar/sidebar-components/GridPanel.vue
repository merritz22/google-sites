<script setup>
    import { Icon } from '@iconify/vue';
    import { ref } from 'vue';

    import Title from '../../../data/default/Title.json'

    const props = defineProps({
        data:{
            type:Object,
            required: true,
            computed:{
                changed(){
                    return data
                }
            }
        }
    })

    const t = ref([])
    const count = ref(0)


    function addTitle() {
        let i = count.value++
        let title = {
            "id":i,
            "name":"text",
            "visible":true,
            "data":{
                "id": i,
                "name":"Title",
                "fontFamily": "Helvetica",
                "fontSize": 60,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "textDecoration": "none",
                "color": "black",
                "textAlign": "left",
                "delete":false
            }
        }
        t.value.push(title)
        // console.log(t.value)
        props.data.push(title)
    }

    function addText() {
        let i = count.value++
        let textBox = {
            "id":i,
            "name":"text-box",
            "visible":true,
            "data":{
                "id": i,
                "name":"Title",
                "fontFamily": "Helvetica",
                "fontSize": 30,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "textDecoration": "none",
                "color": "black",
                "textAlign": "left",
                "delete":false
            }
        }
        t.value.push(textBox)
        // console.log(t.value)
        props.data.push(textBox)
    }
</script>

<template>
    <div class="grid-panel">
            <div @click="addTitle">
                <Icon icon="ic:round-text-fields" color="blue" width="35" height="35" />
                <h1>Title</h1>
            </div>
            <div>
                <Icon icon="bi:image" color="red" width="35" height="35" />
                <h1>Images</h1>
            </div>
            <div @click="addText">
                <Icon icon="icomoon-free:embed" color="yellow" width="35" height="35" />
                <h1>TextBox</h1>
            </div>
            <div>
                <Icon icon="fxemoji:linksymbol" color="yellow" width="35" height="35" />
                <h1>Links</h1>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .grid-panel{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 125px 125px;
        border-bottom: 1px solid gray;

        div{
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            display: block;
            align-items: center;
            cursor: pointer;
            transition: font-size 20s ease-in-out;

            &:hover{
                h1{
                    color: gray;
                }
            }

            h1{
                font-size: 14px;
                width: 100%;
                text-align: center;
            }

        }
    }
</style>
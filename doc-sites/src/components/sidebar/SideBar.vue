<script setup>
    import { ref } from 'vue';
    import Insert from './Insert.vue';
    import Themes from './Themes.vue';
    import Pages from './Pages.vue';

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
        prev:{
            type:Boolean,
            required:true,
            computed:{
                changed(){
                    return prev
                }
            }
        }
    })

    const id = ref(1)
    const preview = ref(props.prev)
    function changeSideNavActive(val) {
        id.value = val
    }
</script>

<template>
    <aside class="bg-dark" v-show="preview">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" 
                class="btn-check" name="btnradio" 
                id="btnradio1" autocomplete="off" checked
                @click="changeSideNavActive(1)">
            <label class="btn btn-outline-secondary" for="btnradio1">Themes</label>

            <input type="radio" class="btn-check" name="btnradio" 
                id="btnradio2" autocomplete="off"
                @click="changeSideNavActive(2)">
            <label class="btn btn-outline-secondary" for="btnradio2">Pages</label>

            <input type="radio" class="btn-check" name="btnradio" 
                id="btnradio3" autocomplete="off"
                @click="changeSideNavActive(3)">
            <label class="btn btn-outline-secondary" for="btnradio3">Insert</label>
        </div>
        <div v-if="id == 3">
            <Insert :data="data"/>
        </div>
        <div v-if="id == 1">
            <Themes/>
        </div>
        <div v-if="id == 2">
            <Pages/>
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    aside{
        font-size: 10px;
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 90%;
        overflow: hidden;
        position: fixed;
        margin-top: 60px;
        overflow-y: scroll;
        scrollbar-color: gray;

        background: none;
        color: #ffff;
        border-right: 1px solid gray;


        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>
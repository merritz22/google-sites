<script setup>
    import { ref } from 'vue';
    import GridPanel from './sidebar-components/GridPanel.vue';
    import CollapseComponent from './sidebar-components/CollapseComponent.vue';
    import TableOfContentsComponent from './sidebar-components/TableOfContentsComponent.vue';
    import ImageCarousselComponent from './sidebar-components/ImageCarousselComponent.vue';
    import ButtonComponent from './sidebar-components/ButtonComponent.vue';
    import DividerComponent from './sidebar-components/DividerComponent.vue';
    import SocialLinksComponent from './sidebar-components/SocialLinksComponent.vue';
    import PlaceholderComponent from './sidebar-components/PlaceholderComponent.vue';
    import CalendarComponent from './sidebar-components/CalendarComponent.vue'
    import MapComponent from './sidebar-components/MapComponent.vue';
    import DocsComponent from './sidebar-components/DocsComponent.vue';
    import ChartComponent from './sidebar-components/ChartComponent.vue';
    import ContentBlock from './sidebar-components/ContentBlock.vue';

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
</script>

<template>
    <aside class="bg-dark">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Themes</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Pages</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio3">Insert</label>
        </div>
        <GridPanel :data="data"/>
        <ContentBlock :data="data"/>
        <ButtonComponent :data="data"/>
        <CalendarComponent :data="data"/>
        <ChartComponent :data="data"/>
        <CollapseComponent :data="data"/>
        <DividerComponent :data="data"/>
        <DocsComponent :data="data"/>
        <ImageCarousselComponent :data="data"/>
        <MapComponent :data="data"/>
        <PlaceholderComponent :data="data"/>
        <SocialLinksComponent :data="data"/>
        <TableOfContentsComponent :data="data"/>
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
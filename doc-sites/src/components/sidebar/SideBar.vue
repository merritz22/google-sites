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
    <aside>
        <div class="panel">
            <h1 class="tools-links">Themes</h1>
            <h1 class="tools-links">Pages</h1>
            <h1 class="tools-links">Insert</h1>
        </div>
        <GridPanel :data="data"/>
        <ContentBlock :data="data"/>
        <CollapseComponent :data="data"/>
        <TableOfContentsComponent :data="data"/>
        <ImageCarousselComponent :data="data"/>
        <ButtonComponent :data="data"/>
        <DividerComponent :data="data"/>
        <SocialLinksComponent :data="data"/>
        <PlaceholderComponent :data="data"/>
        <CalendarComponent :data="data"/>
        <MapComponent :data="data"/>
        <DocsComponent :data="data"/>
        <ChartComponent :data="data"/>
    </aside>
</template>

<style lang="scss" scoped>
    aside{
        font-size: 12px;
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

    .panel{
        display: flex;
        flex-direction: row;
        transition: .5s ease all;
        justify-content: space-between;
        width: 100%;
        height: 50px;
        border-bottom: 1px solid gray;
        margin: 0;

        .tools-links{
            transition: .5s ease all;
            padding-bottom: 6px;
            border-bottom: 6px solid transparent;
            margin-left: 8px;
            margin-right: 10px;
            height: 22px;

            &:hover{
                color: #ffff;
                border-color:gray;
                cursor: pointer;
            }
        }
    }



</style>
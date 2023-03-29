<script setup>
    import { ref } from 'vue';
    import GridPanel from './sidebar-components/InsertComponents/GridPanel.vue';
    import CollapseComponent from './sidebar-components/InsertComponents/CollapseComponent.vue';
    import TableOfContentsComponent from './sidebar-components/InsertComponents/TableOfContentsComponent.vue';
    import ImageCarousselComponent from './sidebar-components/InsertComponents/ImageCarousselComponent.vue';
    import ButtonComponent from './sidebar-components/InsertComponents/ButtonComponent.vue';
    import DividerComponent from './sidebar-components/InsertComponents/DividerComponent.vue';
    import SocialLinksComponent from './sidebar-components/InsertComponents/SocialLinksComponent.vue';
    import PlaceholderComponent from './sidebar-components/InsertComponents/PlaceholderComponent.vue';
    import CalendarComponent from './sidebar-components/InsertComponents/CalendarComponent.vue'
    import MapComponent from './sidebar-components/InsertComponents/MapComponent.vue';
    import DocsComponent from './sidebar-components/InsertComponents/DocsComponent.vue';
    import ChartComponent from './sidebar-components/InsertComponents/ChartComponent.vue';
    import ContentBlock from './sidebar-components/InsertComponents/ContentBlock.vue';

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
</template>

<style lang="scss" scoped></style>
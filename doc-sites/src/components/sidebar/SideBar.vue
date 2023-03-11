<script setup>
    import GridPanel from './sidebar-components/GridPanel.vue';
    const active = false
</script>

<template>
    <aside>
        <div class="panel">
            <h1 class="tools-links">Themes</h1>
            <h1 class="tools-links">Pages</h1>
            <h1 class="tools-links">Insert</h1>
        </div>
        <GridPanel/>
    </aside>
</template>

<style lang="scss" scoped>
    aside{
        font-size: 14px;
        display: flex;
        flex-direction: column;
        width: 250px;
        min-height: 85%;
        overflow: hidden;
        position: fixed;
        margin-top: 106px;

        background: none;
        color: #ffff;
        box-shadow: 1px 2px gray;

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
        border: 2px solid blue;
        margin: 0;

        .tools-links{
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            margin-left: 10px;
            margin-right: 10px;
            height: 22px;

            &:hover{
                color: #ffff;
                border-color:#ffff;
                cursor: pointer;
            }
        }
    }
</style>
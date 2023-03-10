<script setup>
    const active = false
</script>

<template>
    <aside>
        <div class="panel">
            <h1 class="tools-links">Themes</h1>
            <h1 class="tools-links">Pages</h1>
            <h1 class="tools-links">Insert</h1>
        </div>
        <div class="grid-panel">
            <div>
                <i class="fa fa-font" aria-hidden="true"></i>
                <h1>Text box</h1>
            </div>
            <div>
                <i class="fa fa-picture-o" aria-hidden="true"></i>
                <h1>Images</h1>
            </div>
            <div>
                <i class="fa fa-code" aria-hidden="true"></i>
                <h1>Embed</h1>
            </div>
            <div>
                <i class="fa fa-" aria-hidden="true"></i>
                <h1>Nothing yet</h1>
            </div>
        </div>
        <div class="content-block">
            <span class="title-panel">
                <h1>CONTENT BLOCKS</h1>
                <i v-show="!active" class="fa fa-caret-down" aria-hidden="true"></i>
                <i v-show="active" class="fa fa-caret-up" aria-hidden="true"></i>
            </span>
            <div class="block-samples"></div>
        </div>
        <span class="other-tools">
            <i class="fa fa-arros-v" aria-hidden="true"></i>
            <h1>Collapse</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-list" aria-hidden="true"></i>
            <h1>Table of contents</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-columns" aria-hidden="true"></i>
            <h1>Image caroussel</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-square-o" aria-hidden="true"></i>
            <h1>Button</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-minus" aria-hidden="true"></i>
            <h1>Divider</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-users" aria-hidden="true"></i>
            <h1>Social links</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-plus-square" aria-hidden="true"></i>
            <h1>Placeholder</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <h1>Calendar</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h1>Map</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-file-text" aria-hidden="true"></i>
            <h1>Docs</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            <h1>Chart</h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-" aria-hidden="true"></i>
            <h1></h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-" aria-hidden="true"></i>
            <h1></h1>
        </span>
        <span class="other-tools">
            <i class="fa fa-" aria-hidden="true"></i>
            <h1></h1>
        </span>
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
        flex: 1;
        justify-content: space-between;
        width: 100%;
        margin: 0;

        .tools-links{
            transition: .5s ease all;
            padding-bottom: 4px;
            border-bottom: 5px solid transparent;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 5px;

            &:hover{
                color: #00afea;
                border-color: #00afea;
                cursor: pointer;
            }
        }
    }
</style>
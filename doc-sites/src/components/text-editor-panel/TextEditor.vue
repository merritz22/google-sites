<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="text-style-panel">
        <div class="title">
            Title <Icon icon="ic:round-arrow-drop-down" width="25" height="25" />
        </div>
        <div class="font-style">
            Monospace <Icon icon="ic:round-arrow-drop-down" width="25" height="25" />
        </div>
        <div class="font-size">
            64 <Icon icon="ic:round-arrow-drop-down" width="25" height="25" />
        </div>
        <div class="style-sparkles">
            <div class="font-bold">
                <Icon icon="ph:text-b-bold" width="25" height="25" />
            </div>
            <div class="font-italic">
                <Icon icon="ph:text-italic-bold" width="25" height="25" />
            </div>
            <div class="font-underline">
                <Icon icon="ph:text-underline" width="25" height="25" />
            </div>
            <div class="font-color">
                <Icon icon="ic:round-format-color-text" width="25" height="25" />
            </div>
        </div>
        <div class="text-display">
            <Icon icon="ph:text-align-left" width="25" height="25" /><Icon icon="ic:round-arrow-drop-down" width="25" height="25" />
        </div>
        <div class="bin">
            <Icon icon="fluent-mdl2:delete" width="25" height="25" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .text-style-panel{
        background-color: #8bd8f1;
        display: flex;
        width: fit-content;
        padding: 10px;
        height: 25px;
        border: none;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
        transition: 2s ease all;

        .text-display,.font-size{
            width: 40px;
        }

        .bin{
            border: none;
            width: fit-content;
        }

        &>div{
            width: 100px;
            display: flex;
            justify-content: space-between;
            border-right: .5px solid rgb(39, 38, 38);
            height: 99%;
            margin-left: 5px;
            cursor: pointer;
        }

        .style-sparkles{
            display: flex;
            justify-content: space-between;
            width: 150px;
        }
    }
</style>
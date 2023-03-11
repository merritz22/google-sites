<script setup></script>

<template>
    <div class="content-block">
            <span class="title-panel">
                <h1>CONTENT BLOCKS</h1>
                <i v-show="!active" class="fa fa-caret-down" aria-hidden="true"></i>
                <i v-show="active" class="fa fa-caret-up" aria-hidden="true"></i>
            </span>
            <div class="block-samples"></div>
        </div>
</template>

<style lang="scss" scoped></style>
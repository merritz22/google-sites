<script setup></script>

<template>
    <span class="other-tools">
        <fa class="single-component" icon="fa-solid fa-file-lines" />
        <h1>Docs</h1>
    </span>
</template>

<style lang="scss" scoped>
.other-tools{
    margin-top: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        height: 50px;

        &:hover{
            cursor: pointer;
        }

        .single-component{
            margin-left: 15px;
            width: 40px;
            height: 40px;
        }
        h1{
            margin-left: 10px;
        }
    }
</style>
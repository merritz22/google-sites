<script setup>
    import { Icon } from '@iconify/vue';
</script>

<template>
    <span class="other-tools">
        <Icon icon="raphael:users" width="30" height="30" />
        <h4>Social links</h4>
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

        svg{
            margin-left: 15px;
        }
        h4{
            margin-left: 10px;
        }
    }
</style>
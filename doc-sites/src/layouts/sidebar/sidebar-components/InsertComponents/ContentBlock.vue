<script setup>
    import { Icon } from '@iconify/vue';
import { ref } from 'vue';

    const showContent = ref(true)
    function switches() {
        showContent.value = !showContent.value
        console.log('inside')
    }
</script>

<template>
    <div class="content-block">
            <div class="title-panel" @click="switches">
                <h5 class="mt-2">CONTENT BLOCKS</h5>
                <Icon class="up" v-show="showContent" icon="tabler:chevron-up" width="30" height="30" />
                <Icon class="dpwn" v-show="!showContent" icon="tabler:chevron-down" width="30" height="30" />
            </div>
            <div class="block-samples" v-show="showContent">
                <div class="flex-one">
                    <Icon icon="clarity:picture-line" width="50" height="50" />
                    <Icon icon="system-uicons:paragraph-end" width="50" height="50" />
                </div>
                <div class="flex-one">
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="40" height="40" />
                        <Icon icon="system-uicons:paragraph-end" width="40" height="40" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="40" height="40" />
                        <Icon icon="system-uicons:paragraph-end" width="40" height="40" />
                    </div>
                </div>
                <div class="flex-two">
                    <Icon class="nav" icon="clarity:picture-line" width="30" height="30" />
                    <Icon class="main" icon="clarity:picture-line" width="50" height="50" />
                    <Icon class="nav2" icon="clarity:picture-line" width="30" height="30" />
                </div>
                <div class="flex-one">
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="system-uicons:paragraph-end" width="25" height="25" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="system-uicons:paragraph-end" width="25" height="25" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="system-uicons:paragraph-end" width="25" height="25" />
                    </div>
                </div>
                <div class="flex-one">
                    <div style="border: none;">
                        <Icon icon="clarity:picture-line" width="23" height="50" />
                        <Icon icon="system-uicons:paragraph-end" width="23" height="50" />
                    </div>
                    <div style="border: none;">
                        <Icon icon="clarity:picture-line" width="23" height="50" />
                        <Icon icon="system-uicons:paragraph-end" width="23" height="50" />
                    </div>
                </div>
                <div class="flex-one">
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="material-symbols:line-start-rounded" width="25" height="25" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="material-symbols:line-start-rounded" width="25" height="25" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="material-symbols:line-start-rounded" width="25" height="25" />
                    </div>
                    <div class="flex-one-two">
                        <Icon icon="clarity:picture-line" width="25" height="25" />
                        <Icon icon="material-symbols:line-start-rounded" width="25" height="25" />
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.content-block{
    display: block;

    .title-panel{
        display: flex;
        justify-content: space-between;
        text-align: center;
        cursor: pointer;

        svg{
            margin-right: 15px;
            margin-top: auto;
            margin-bottom: auto;
            transition: .5s ease all;
        }
        h1{
            margin-left: 10px;
        }

    }

    .block-samples{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 125px 125px;
        border-bottom: 1px solid gray;
    }

    .flex-one{
        display: flex;
        border: 1px solid gray;
        align-items: center;
        justify-content: center;
        margin: 5px;
        border-radius: 5px;
    }

    .flex-one-two{
        display: grid;
    }

    .flex-two{
        display: grid;
        grid-template: "a b b" 50% 
                        "c b b" 50%;
        border: 1px solid gray;
        align-items: center;
        justify-content: center;
        margin: 5px;
        border-radius: 5px;
    }

    .nav{
        grid-area: a;
    }

    .nav2{
        grid-area: c;
    }

    .main{
        grid-area: b;
    }
}
</style>
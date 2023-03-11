<script setup></script>

<template>
    <div class="grid-panel">
            <div>
                <i style="color: blue;" class="fa fa-font fa-2x" aria-hidden="true"></i>
                <h1>Text box</h1>
            </div>
            <div>
                <i style="color: red;" class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
                <h1>Images</h1>
            </div>
            <div>
                <i class="fa fa-code fa-2x" aria-hidden="true"></i>
                <h1>Embed</h1>
            </div>
            <div>
                <i class="fa-solid fa-code" aria-hidden="true"></i>
                <h1>Nothing yet</h1>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .grid-panel{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 125px 125px;

        div{
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            display: block;
            align-items: center;

            h1{
                font-size: 12px;
            }
        }
    }
</style>
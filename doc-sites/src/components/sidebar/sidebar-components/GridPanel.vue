<script setup></script>

<template>
    <div class="grid-panel">
            <div>
                <fa class="grid-img" icon="fa-solid fa-font" style="color: blue;"/>
                <h1>Text box</h1>
            </div>
            <div>
                <fa class="grid-img" icon="fa-solid fa-image" style="color: red;" />
                <h1>Images</h1>
            </div>
            <div>
                <fa class="grid-img" icon="fa-solid fa-wand-magic-sparkles" style="color: yellow;" />
                <h1>Embed</h1>
            </div>
            <div>
                <fa class="grid-img" icon="fa-solid fa-link" />
                <h1>Links</h1>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .grid-panel{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 125px 125px;
        border-bottom: 1px solid gray;

        div{
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            display: block;
            align-items: center;
            cursor: pointer;
            transition: font-size 20s ease-in-out;

            &:hover{
                h1{
                    color: gray;
                    font-size: 16px;
                }
            }

            h1{
                font-size: 14px;
                width: 100%;
                text-align: center;
            }

            .grid-img{
                width: 50px;
                height: 50px;
            }
        }
    }
</style>
<script setup>
    const props=defineProps({
        id:{
            type:String,
            required:true
        }
    })

    function changeImgSrc(e) {
        if (!(props.id === 'Static')) {
            e.target.src = 'data:image/png;base64,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'
        }
    }
</script>

<template>
    <img :id="id" src="@/assets/logo.png" 
    alt=""
    @dblclick="changeImgSrc"/>
</template>

<style lang="scss" scoped>

img{
    width: 30px;
    height: 30px;
    transition: 0.5s ease all;
    margin-left: 16px;
    margin-right: 16px;
}
</style>
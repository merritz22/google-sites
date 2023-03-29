<script setup>
    import { Icon } from '@iconify/vue';

    const props = defineProps({
        size:{
            type:Object,
            required: true
        }
    })
</script>

<template>
    <Icon icon="fa-solid:ellipsis-v" :width="size.width" :height="size.height" :horizontalFlip="true" />
</template>
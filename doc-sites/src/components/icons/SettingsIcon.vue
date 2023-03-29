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
    <Icon icon="octicon:gear-16" :width="size.width" :height="size.height" :horizontalFlip="true" />
</template>
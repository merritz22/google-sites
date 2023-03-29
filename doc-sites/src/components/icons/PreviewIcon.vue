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
    <Icon icon="fluent:phone-laptop-16-regular" :width="size.width" :height="size.height" :horizontalFlip="true" />
</template>
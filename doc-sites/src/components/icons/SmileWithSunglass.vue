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
    <Icon icon="noto:smiling-face-with-sunglasses" :width="size.width" :height="size.height" />
</template>
<script setup>
    import { Icon } from '@iconify/vue';

    const props = defineProps({
        size:{
            type:Object,
            required:true
        }
    })
</script>

<template>
    <Icon icon="ic:twotone-replay" :width="size.width" :height="size.height" />
</template>
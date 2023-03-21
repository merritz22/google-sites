<script setup>
    import { ref } from 'vue';
    import CommentComponent from '../text-editor-panel/CommentComponent.vue';
    import TextComponent from '../text-editor-panel/TextComponent.vue';

    const props = defineProps({
        data:{
            type:Object,
            required:true,
            computed:{
                changed(){
                    return this.data
                }
            }
        }
    })

    const componentData = ref(props.data)
</script>

<template>
    <div v-if="componentData.name === 'text'">
        <TextComponent :data="componentData.data" :type="componentData.name"/>
    </div>
    <div v-else-if="componentData.name === 'text-box'">
        <CommentComponent :data="componentData.data" :type="componentData.name"/>
    </div>
</template>
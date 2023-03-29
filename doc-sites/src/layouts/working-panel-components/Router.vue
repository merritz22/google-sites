<script setup>
    import { ref } from 'vue';
    import TextComponent from '../../components/text-editor-panel/TextComponent.vue';
    import TextEditor from '../../components/text-editor-panel/TextEditor.vue';

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
<script setup>
import { ref } from "vue"

    


    const props = defineProps({
        text:{
            type:String,
            required:true
        }
    })

    const emit = defineEmits(['update-input-value'])
    const data = ref(props.text) 

    function updateInputData(e) {
        data.value = e.target.value
        emit('update-input-value',data)
    }
</script>

<template>
    <input class="bg-transparent ms-2 text-center fs-5 border-0" 
    :value="data"
    @change="updateInputData">
</template>
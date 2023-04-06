<script setup>
import { ref, watch} from 'vue';
import Navigation from '../layouts/Navigation.vue';
import SideBar from '../layouts/sidebar/SideBar.vue';
import WorkingPanel from '../layouts/WorkingPanel.vue';
const data = ref([])
const prev = ref(true)
const workingClass = ref('working-tab')

function hideEveryThing(emitProps) {
  prev.value = emitProps.value
  workingClass.value = 'working-tab-off'
  document.addEventListener('keydown',(e)=>{
    const nom = e.key
    const code = e.code

    if (nom == 'Control') {
      //On ne realise aucune action
      return
    }

    if (e.ctrlKey && code == 'Digit1') {
      workingClass.value = 'working-tab'
      setTimeout(() => {
        prev.value = true
      }, 800);
    }
  },false)
}

</script>

<template>
  <div class="accueil">
    <Navigation :prev="prev"
    @switch-to-preview="hideEveryThing"/>
    <SideBar :data="data" :prev="prev"/>
    <WorkingPanel :data="data" :prev="prev"
    :main-class="workingClass"/>
  </div>
</template>

<style lang="scss">
  body,.accueil {
    margin: 0;
  }
  body{
    min-width: 950px;
    max-width: 1350px;
    background-image: url("../assets/hero-bg.png");
    font-family: Arial, Helvetica, sans-serif;
  }
  svg{
    cursor: pointer;
  }
</style>

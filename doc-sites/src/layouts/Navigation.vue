<script setup>
    import { ref, defineEmits } from 'vue';
    import SmileWithSunglass from '../components/icons/SmileWithSunglass.vue';
    import BackIcon from '../components/icons/BackIcon.vue';
    import ForwardIcon from '../components/icons/ForwardIcon.vue';
    import PreviewIcon from '../components/icons/PreviewIcon.vue';
    import OptionIcon from '../components/icons/OptionIcon.vue';
    import SettingsIcon from '../components/icons/SettingsIcon.vue';
    import StartupImage from '../components/images/StartupImage.vue';


    const props = defineProps({
        prev:{
            type:Boolean,
            required:true,
            computed:{
                changed(){
                    return this.prev
                }
            }
        }
    })
    const emit = defineEmits(['switchToPreview'])
    const prevw = ref(props.prev)
    const navSmileSize = ref({
        "width":20,
        "Height": 20
    })
    const navIconSize = ref({
        "width":30,
        "Height": 30
    })
    const title = 'Merritz-Lab'

    function preview() {
        prevw.value = !prevw.value
        emit('switchToPreview',prevw)
    }
</script>

<template>
    <header class="bg-dark" v-show="prevw">
        <nav>
            <div class="branding">
                <StartupImage :id="'Static'"/>
                <input class="title" :value="title"/>
            </div>
            <div class="navigation bg-dark">
                <li class="text">
                    M<b style="color: red;">e</b>KA save your work
                    <sup>
                        <SmileWithSunglass :size="navSmileSize"/>
                    </sup>
                </li>
                <li>
                    <RouterLink to="/" class="link">
                        <BackIcon :size="navIconSize"/>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <ForwardIcon :size="navIconSize" />
                    </RouterLink>
                </li>
                <li @click="preview">
                    <RouterLink to="" class="link">
                        <PreviewIcon :size="navIconSize"/>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <SettingsIcon :size="navIconSize"/>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <OptionIcon :size="{'width':10,'heigth':10}"/>
                    </RouterLink>
                </li>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    header{
        background: none;
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: .5s ease all;
        color: #ffff;
        box-shadow: 1px 2px gray;
        display: flex;
        height: 60px;
    }

    nav{
        display: flex;
        transition: .5s ease all;
        width: 100%;
        max-width: 1350px;
        min-width: 950px;
    }

    .link{
        font-weight: bold;
        color: #ffff;
        list-style: none;
        text-decoration: none;

        .fa{
            font-size: 25px;
        }
    }

    .link{
        font-size: 14px;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover{
            color: #00afea;
        }
    }

    .branding{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
    }

    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        height: 50px;

        li{
            padding: 16px;
            margin-left: 16px;
            list-style: none;
            font-size: 14px;
        }
    }

    .text{
        font-size: 12px;
    }

    .title{
        text-transform: uppercase;
        background: none;
        border: none;
        font-size: 20px;
        color: #ffff;
    }

</style>
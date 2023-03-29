<script setup>
    import { Icon } from '@iconify/vue';
    import { ref } from 'vue';
import SmileWithSunglass from '../components/icons/SmileWithSunglass.vue';


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

    const prevw = ref(props.prev)
    const title = 'Merritz-Lab'

    function preview() {
        console.log(prevw.value)
        prevw.value = !prevw.value
    }
</script>

<template>
    <header class="bg-dark" v-show="prevw">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt=""/>
                <input class="title" :value="title"/>
            </div>
            <div class="navigation bg-dark">
                <li class="text">
                    M<b style="color: red;">e</b>KA save your work
                    <sup>
                        <SmileWithSunglass/>
                    </sup>
                </li>
                <li>
                    <RouterLink to="/" class="link">
                        
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <Icon icon="ic:twotone-replay" width="30" height="30" :horizontalFlip="true" />
                    </RouterLink>
                </li>
                <li @click="preview">
                    <RouterLink to="" class="link">
                        <Icon icon="fluent:phone-laptop-16-regular" width="30" height="30" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <Icon icon="octicon:gear-16" width="30" height="30" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <Icon icon="fa-solid:ellipsis-v" width="30" height="30" />
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
        img{
            width: 30px;
            height: 30px;
            transition: 0.5s ease all;
            margin-left: 16px;
            margin-right: 16px;
        }
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
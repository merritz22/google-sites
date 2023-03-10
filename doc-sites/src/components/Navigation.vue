<script setup>
    const scrollPosition = null
    const windowWidth = null
</script>

<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt=""/>
                <h1 class="title">My Website</h1>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li class="text">Merritz save your work</li>
                <li><RouterLink to="/" class="link"><i class="fa fa-reply" aria-hidden="true"></i></RouterLink></li>
                <li><RouterLink to="" class="link"><i class="fa fa-share" aria-hidden="true"></i></RouterLink></li>
                <li><RouterLink to="" class="link"><i class="fa fa-laptop" aria-hidden="true"></i></RouterLink></li>
                <li><RouterLink to="" class="link"><i class="fa fa-cog" aria-hidden="true"></i></RouterLink></li>
                <li><RouterLink to="" class="link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></RouterLink></li>
            </ul>
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
    }

    nav{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 100%;
        @media (min-width: 1080px) {
            max-width: 2140px;
        }
    }

    ul,.link{
        font-weight: bold;
        color: #ffff;
        list-style: none;
        text-decoration: none;
    }

    li{
        text-transform: uppercase;
        padding: 16px;
        margin-left: 16px;
    }

    .link{
        font-size: 14px;
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover{
            color: #00afea;
            border-color: #00afea;
        }
    }

    .branding{
        display: flex;
        align-items: center;
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
    }

    .text{
        font-size: 12px;
    }


</style>
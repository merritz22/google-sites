<script setup>
    const scrollPosition = null
    const windowWidth = null
</script>

<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt=""/>
                <h1 class="title">Merritz-Lab</h1>
            </div>
            <div class="navigation">
                <li class="text">MeKA save your work</li>
                <li>
                    <RouterLink to="/" class="link">
                        <fa class="fa" icon="fa-solid fa-reply" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <fa class="fa" icon="fa-solid fa-share" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <fa class="fa" icon="fa-solid fa-house-laptop" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <fa class="fa" icon="fa-solid fa-gear" />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="" class="link">
                        <fa class="fa" icon="fa-solid fa-ellipsis-vertical" />
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
        @media (min-width: 1080px) {
            max-width: 2140px;
        }
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
            border-color: #00afea;
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

</style>
<template>
    <div id="app" class="dola-app">
        <div class="dola-content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!--<div class="bottom-nav border-1px" v-if="isNavShow">
            <router-link :to="{name: 'home'}" class="dola-nav nav-home">
                <i class="nav-img"></i>
                <p class="nav-text">首页</p>
            </router-link>
            <router-link :to="{name: 'product'}" class="dola-nav nav-product">
                <i class="nav-img"></i>
                <p class="nav-text">投资</p>
            </router-link>
            <router-link :to="{name: 'user'}" class="dola-nav nav-user" v-if="isLogin">
                <i class="nav-img"></i>
                <p class="nav-text">我的</p>
            </router-link>
            <router-link :to="{name: 'login'}" class="dola-nav nav-user" v-else>
                <i class="nav-img"></i>
                <p class="nav-text">我的</p>
            </router-link>
            <router-link :to="{name: 'more'}" class="dola-nav nav-more">
                <i class="nav-img"></i>
                <p class="nav-text">更多</p>
            </router-link>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                isNavShow: true,
                isLogin: false
            };
        },
        watch: {
            "$route"(to, from) {

            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    @media only screen and (min-width: 640px) {
        body {
            background: #666;
        }
    }
</style>
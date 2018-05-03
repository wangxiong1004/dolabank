<template>
    <section class="dola-home">
        <header class="home-header">
            <img src="./logo.png" alt="logo" class="dola-logo" />
            <div class="dola-login-wrapper" v-if="!isLogin">
                <span class="btn-wrapper">
                    <router-link :to="{ name: 'login' }" class="login-btn">登录</router-link>
                </span>
                <span class="btn-wrapper">
                    <router-link :to="{ name: 'register' }" class="register-btn">注册</router-link>
                </span>
            </div>
        </header>
        <section class="home-banner-wrapper">
            <div class="home-banner" v-if="appindex.ad && appindex.ad.length>0">
                <a :href="appindex.ad[0].url">
                    <img :src="appindex.ad[0].bg_image" alt="" width="100%" />
                </a>
            </div>
        </section>
        <nav class="home-info-nav">
            <ul class="info-nav-lists clearfix">
                <li class="info-nav-list" v-for="(val, index) in appindex.recommendMenu" :key="index">
                    <a :href="val.forwardUrl">
                        <img :src="val.imageUrl"/>
                        <em>{{ val.name }}</em>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="broad-wrapper"></div>
        <dl-nav></dl-nav>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    import dlNav from '../../components/nav/dlNav.vue';

    export default {
        name: 'home',
        data() {
            return {
                isLogin: false
            };
        },
        computed: {
            ...mapGetters({
                appindex: 'appindex'
            })
        },
        methods: {
        },
        mounted() {
            this.$store.dispatch({
                type: 'appindex'
            });
        },
        components: {
            'dl-nav': dlNav
        }
    }
</script>

<style lang="scss">
    /*@import '../../static/sass/index.scss';*/

    .dola-home {
        .home-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 44px;
            line-height: 44px;
            padding: 0 15px;
            background: linear-gradient(-48deg,#fc6621,#f79039);
            box-sizing: border-box;
            .dola-logo {
                width: 141px;
                height: 24px;
            }
            .dola-login-wrapper {
                position: absolute;
                right: 15px;
                top: 0;
                font-size: 0;
                .btn-wrapper {
                    .login-btn, .register-btn {
                        font-size: 17px;
                        color: #fff;
                        padding: 0 10px;
                    }
                    .login-btn {
                        border-right: 1px solid #fff;
                    }
                }
            }
        }
        .home-banner-wrapper {
            overflow: hidden;
            padding-top: 44px;
            .home-banner {
                height: 180px;
                width: 100%;
                background: url('./home-loading.png') no-repeat center;
                background-size: 100% 180px;
            }
        }
        .home-info-nav {
            width: 100%;
            margin-bottom: 10px;
            background: #fff;
            white-space: nowrap;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            .info-nav-lists {
                padding: 30px 0;
                display: flex;
                .info-nav-list {
                    flex: 1;
                    text-align: center;
                    a {
                        display: block;
                        img {
                            display: block;
                            width: 42px;
                            height: 42px;
                            margin: 0 auto;
                            border-radius: 50%;
                        }
                        em {
                            display: block;
                            margin-top: 9px;
                            font-size: 13px;
                            color: #666;
                        }
                    }
                }
            }
        }
        .broad-wrapper {
            padding: 15px 10px;
            margin-bottom: 10px;
            background-color: #fff;
        }
    }
</style>
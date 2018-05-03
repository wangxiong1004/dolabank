<template>
    <section class="dola-home">
        <header class="home-header">
            <img src="./logo.png" alt="logo" class="dola-logo" />
        </header>
        <section class="home-banner-wrapper">
            <div class="home-banner"></div>
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
    </section>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'home',
        data() {
            return {};
        },
        computed: {
            ...mapGetters({
                appindex: 'appindex'
            })
        },
        methods: {
        },
        created() {
        },
        mounted() {
            this.$store.dispatch({
                type: 'appindex'
            });
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
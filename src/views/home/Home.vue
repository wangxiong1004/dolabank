<template>
    <section class="dola-home">
        <header class="home-header">
            <img src="./logo.png" alt="logo" class="dola-logo" />
        </header>
        <section class="home-banner-wrapper">
            <div class="home-banner"></div>
        </section>
        <nav class="home-info-nav"></nav>
        <div class="broad-wrapper"></div>
    </section>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'home',
        data() {
            return {};
        },
        computed: {
            ...mapState({
                appindex: state => state.home.appindex
            })
        },
        methods: {
            getAppindex() {
                this.$store.dispatch({
                    type: 'appindex'
                });
            }
        },
        created() {
            this.getAppindex();
        }
    }
</script>

<style lang="scss">
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
    }
</style>
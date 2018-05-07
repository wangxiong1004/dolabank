<template>
    <section class="dola-user">User -- {{ username }} -- {{ $route.params.id }}
        <dl-nav></dl-nav>
    </section>
</template>

<script>
    import dlNav from '../../components/nav/dlNav.vue';

    export default {
        computed: {
            username() {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params.username
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ?
                    this.$router.go(-1) :
                    this.$router.push('/')
            }
        },
        watch: {
//          '$route'(to, from) {
//              // 对路由变化作出响应...
//              console.log(to);
//              console.log(from);
//
//              if (to.params.id === 'foo') {
//                  console.log('foo');
//              }
//          }
        },
        beforeRouteUpdate(to, from, next) {
            console.log(to);
            console.log(from);
            console.log(next);
        },
        components: {
            'dl-nav': dlNav
        }
    }
</script>

<style>

</style>
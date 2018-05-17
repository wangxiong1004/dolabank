<template>
    <section class="dola-product" slot="product">
        <scroll ref="scroll">
            <div style="height: 200px;border: 1px solid; width: 100%;">product</div>
            <div style="height: 200px;border: 1px solid; width: 100%;">product</div>
            <div style="height: 200px;border: 1px solid; width: 100%;">product</div>
            <div style="height: 200px;border: 1px solid; width: 100%;">product</div>
            <div style="height: 200px;border: 1px solid; width: 100%;">product</div>
        </scroll>
        <dl-nav></dl-nav>
    </section>
</template>

<script type="text/javascript">
    import Scroll from '../../components/scroll/scroll.vue';
    import dlVav from '../../components/nav/dlNav.vue';

    export default {
        name: 'project',
        components: {
            Scroll,
            'dl-nav': dlVav
        }
    };
</script>

<style lang="scss">

</style>
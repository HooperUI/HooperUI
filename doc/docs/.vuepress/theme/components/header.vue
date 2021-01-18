<template lang="pug">
    .header HEADER
</template>
<script>
export default {
    computed: {
        navs() {
            return this.$site.themeConfig.locales.map(nav => {

            });
        }
    },
    mounted() {
        console.log(this.navs);
    }
}
</script>
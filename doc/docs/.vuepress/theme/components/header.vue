<template lang="pug">
    .header
        ul
            li(v-for="(item, index) in navs.nav")
                a(:href="item.link") {{item.text}}
</template>
<script>
export default {
    computed: {
        navs() {
            const themeConf = this.$themeConfig;
            const langPath = this.$localeConfig.path;
            return themeConf.locales[langPath];
        }
    },
    mounted() {
        console.log(this.navs);
    }
}
</script>
<template lang='pug'>
    #global-layout
        Header
        component(:is='layout')
</template>
<style lang="scss" src="../styles/index.scss"></style>
<script>
    import Header from '../components/header.vue'
    export default {
        components: {
            Header
        },
        computed: {
            layout() {
                if (this.$page.path) {
                    if (this.$frontmatter.layout) {
                        // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
                        return this.$frontmatter.layout;
                    }
                    return 'Layout';
                }
                return 'NotFound';
            }
        },
        created() {
            // const allLocals = Object.keys(this.$site.themeConfig.locales);
            // // 将第一个默认语言 "/" 先 shift 出来
            // window.Vue.prototype.$allLocals = allLocals;
        },
        mounted() {
            console.log(this, this.$page, this.$site);
        }
    }
</script>

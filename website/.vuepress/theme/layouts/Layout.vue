<template lang='pug'>
#global-layout
    Header.header
    .theme-container
        SideBar.sidebar
        .main-content
            Content
        Catalogue.catalog
    Footer.footer
</template>
<style lang="scss" src="../styles/index.scss"></style>
<script lang="ts">
import Header from '../components/header.vue';
import SideBar from '../components/sidebar.vue';
import Catalogue from '../components/catalogue';
import Footer from '../components/footer.vue';
export default {
    components: {
        Header,
        SideBar,
        Catalogue,
        Footer
    }
}
</script>
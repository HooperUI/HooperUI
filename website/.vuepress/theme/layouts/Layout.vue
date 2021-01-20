<template lang='pug'>
#global-layout
    Header.header
    .theme-container
        SideBar.sidebar
        .main-content
            Content
        .footer
</template>
<style lang="scss" src="../styles/index.scss"></style>
<script>
import SideBar from '../components/sidebar.vue';
import Header from '../components/header.vue';
export default {
    components: {
        SideBar,
        Header
    }
}
</script>
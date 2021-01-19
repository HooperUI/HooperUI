<template lang='pug'>
    .theme-container
        SideBar.sidebar
        Content.main-content
        .roots
</template>
<style lang="scss" src="../styles/index.scss"></style>
<script>
import SideBar from '../components/sidebar.vue';
export default {
    components: {
        SideBar
    }
}
</script>
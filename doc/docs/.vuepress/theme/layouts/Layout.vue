<template lang='pug'>
    .theme-container
        Content
</template>
<style lang="scss" src="../styles/index.scss"></style>
<script>
export default {
    mounted() {
        console.log(this.$page, this.$site);
    }
}
</script>
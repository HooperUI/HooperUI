<template lang="pug" src="./button.pug"></template>
<style lang="sass" src="./button.scss"></style>
<script lang="ts">
export default {
    data() {
        return {
            count: 100,
            aaa: 123
        }
    },
    mounted() {
        setInterval(() => {
            this.count++;
        }, 1000);
    },
};
</script>

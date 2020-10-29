<template lang="pug" src="./button.pug"></template>
<script lang="ts">
export default {
    data() {
        return {
            count: 100,
            aaa: 123
        };
    },
    mounted() {
        setInterval(() => {
            this.count++;
        }, 1000);
    }
};
console.log(undefined, 12);
</script>
<style lang="sass" src="./button.scss"></style>

<template lang="pug" src="./button.pug"></template>
<style lang="sass" src="./button.scss"></style>
<script lang="ts">
    import {defineComponent} from 'vue';
    const button = defineComponent({
        name: 'HooButton',
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
    });
    export default button;
</script>

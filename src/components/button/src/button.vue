<template lang="pug" src="./button.pug"></template>
<script lang="ts">
import {defineComponent, Component} from 'vue';
const alert:Component = defineComponent({
    name: 'HButton',
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

export default alert;
</script>
<style lang="sass" src="./button.scss"></style>

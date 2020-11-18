<template lang="pug" src="./button.pug"></template>
<script lang="ts">
import {
    defineComponent,
    Component,
    onMounted,
    reactive,
    ref
} from 'vue';
const alert:Component = defineComponent({
    name: 'HButton',
    setup() {
        const count = ref(0);
        const content = reactive({title: 'Hello,HooperUI!'});
        onMounted(() => {
            setInterval(() => {
                count.value++;
            }, 1000);
        });
        return {
            count,
            content
        };
    }
});
export default alert;
</script>
<style lang="sass" src="./button.scss"></style>

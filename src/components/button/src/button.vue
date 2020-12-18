<template lang="pug" src="./button.pug"></template>
<script lang="ts">
import {
    defineComponent,
    onMounted,
    reactive,
    ref,
    PropType
} from 'vue';
type buttonTypes = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'link' | 'normal'>;
type buttonSize = PropType<'large' | 'normal' | 'mini'>;

export default defineComponent({
    name: 'HButton',
    props: {
        type: {
            type: String as buttonTypes,
            default: 'normal'
        },
        size: {
            type: String as buttonSize,
            default: 'normal'
        }
    },
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
</script>
<style lang="sass" src="./button.scss"></style>

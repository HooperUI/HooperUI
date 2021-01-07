<template lang="pug" src="./button.pug"></template>
<script lang="ts">
import {
    defineComponent,
    onMounted,
    reactive,
    ref,
    PropType
} from 'vue';
type buttonTypes = PropType<'button' | 'submit' | 'reset'>;
type buttonColorTypes = PropType<'primary' | 'link' | 'normal' | normalColorTypes>;
type buttonSize = PropType<'large' | 'normal' | 'mini'>;

export default defineComponent({
    name: 'HButton',
    props: {
        type: {
            type: String as buttonColorTypes,
            default: 'normal'
        },
        size: {
            type: String as buttonSize,
            default: 'normal'
        },
        icon: {
            type: String,
            default: ''
        },
        buttonType: {
            type: String as buttonTypes,
            default: 'button',
            validator: (val: string) => {
                return ['button', 'submit', 'reset'].includes(val);
            }
        },
        loading: Boolean,
        disabled: Boolean,
        shallow: Boolean,
        round: Boolean,
        circle: Boolean
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

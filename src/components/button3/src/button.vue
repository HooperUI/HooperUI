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
type buttonColorTypes = PropType<'primary' | 'link' | 'normal' | globalTypes>;
type buttonSize = PropType<globalSizes>;

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
        shadow: {
            type: Boolean,
            default: false
        },
        round: Boolean,
        square: Boolean,
        shallow: Boolean,
        dashed: Boolean,
        loading: Boolean,
        disabled: Boolean,
        block: Boolean
    },
    setup() {
    },
    methods: {
    }
});
</script>
<style lang="sass" src="./button.scss"></style>

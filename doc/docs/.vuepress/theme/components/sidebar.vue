<template lang="pug">
    .sidebar-wrapper
        ul
            li(v-for="(item, index) in sidebars")
                a(:href="item.regularPath") {{item.title}}
</template>
<script>
import {getSidebar} from '../utils/util';
export default {
    computed: {
        sidebars() {
            return getSidebar.call(this);
        }
    },
    mounted() {
        console.log();
    }
}
</script>
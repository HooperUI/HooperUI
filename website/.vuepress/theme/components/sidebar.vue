<template lang="pug">
.sidebar-wrapper
    ul
        li(v-for="(item, index) in sidebars" :key="index")
            router-link(:to="item.path") {{item.title}}
</template>
<script>
import {onMounted, ref, watch} from 'vue';
import {usePagesData, useRouteLocale, usePageData} from '@vuepress/client';
import {getSidebar} from '../utils/util';
export default {
    setup(props, context) {
        const page = usePageData();
        const pages = usePagesData();
        const langPath = useRouteLocale();
        const sidebars = ref([]);

        function genSidebar() {
            getSidebar({
                lang: langPath.value,
                pages: pages.value,
                location: page.value
            }).then(res => {
                sidebars.value = res;
            });
        }
        watch(page, genSidebar, {
            immediate: true
        });
        return {
            sidebars
        }
    }
}
</script>
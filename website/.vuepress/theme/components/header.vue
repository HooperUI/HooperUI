<template lang="pug">
.header-wrapper
    router-link(:to="langPath") HooperUI
    ul.nav-wrapper
        li(v-for="(item, index) in navs" :key="index")
            router-link(:to="item.link") {{item.text}}
    .more
        .languages-changer
            | 选择语言
        .theme-changer
            | 默认主题
        .search-wrapper
            | Search
</template>
<script>
import {useRouteLocale, useThemeLocaleData} from '@vuepress/client';
import {computed} from 'vue';
export default {
    setup(props, context) {
        const langPath = useRouteLocale();
        const localeData = useThemeLocaleData();
        const navs = computed(() => localeData.value.locales[langPath.value].navbar);
        // console.log(siteData);
        return {
            langPath,
            navs
        };
    }
}
</script>
<style lang="scss">
.header-wrapper {
    display: flex;
    align-items: center;
}

.logo {
    min-width: 100px;
}

.nav-wrapper {
    flex: 1;
    align-items: flex-end;
}

.more {
    min-width: 200px;
    display: flex;
}
</style>
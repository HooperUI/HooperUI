import {usePageData} from '@vuepress/client';
import { h } from 'vue'

const generatList = nodes => {
    return h('ul', {
        class: `catalist-wrapper-${nodes[0].level}`
    }, nodes.map(node => {
        return h('li', {
            class: `catalist-item-${node.level}`
        }, [
            h('a', {
                name: node.title,
                href: '#' + node.slug,
                class: `catalist-link-${node.level}`
            }, node.title),
            node.children.length ? generatList(node.children) : ''
        ]);
    }));
}

const Catalogue = (props, context) => {
    const pageData = usePageData();
    return h('div', {
        class: 'catalist-wrapper'
    }, generatList(pageData.value.headers));
}
Catalogue.props = ['level']

export default Catalogue
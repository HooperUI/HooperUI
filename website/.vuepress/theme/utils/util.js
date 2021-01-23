/**
 * @file: util.js
 * @since: 2021-01-19
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

export const getSidebar = async function({lang, pages, location: local}) {
    // Find paths of the current page
    // If it doesn't match the regExp, it must be the home page.
    // The home page doesn't need to generate the sidebar
    const pathMatch = local.path.match(new RegExp(`^${lang}[a-z]+\/`));
    if (pathMatch) {
        const pathReg = new RegExp('^' + pathMatch[0].replace(/\//g, '\/'));
        const sideBars = [];
        for (let page of Object.keys(pages)) {
            if (pathReg.test(page)) {
                const pageInfo = await pages[page]();
                sideBars.push(pageInfo);
            }
        }
        return sideBars;
    }
};

/**
 * @file: util.js
 * @since: 2021-01-19
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

export const getSidebar = function() {
    const allLocals = Object.keys(this.$site.themeConfig.locales);
    const pathMatch = this.$page.regularPath.match(/\/[a-z]+\//);
    if (pathMatch) {
        const pathReg = new RegExp('^' + pathMatch[0].replace(/\//g, '\/'));
        const sideBars = [];
        this.$site.pages.forEach(page => {
            if(pathReg.test(page.regularPath)) {
                sideBars.push(page);
            }
        });
        return sideBars;
    }
};

/**
 * @file: enhanceApp.js This config will be mixined into main app
 * @since: 2021-01-15
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */
import HooperUI from 'hooperui'
export default ({app}) => {
    // ...somthing else
    app.use(HooperUI);
    // alert(Object.keys(window.HooperUI))
    // console.log(app);
}

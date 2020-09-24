/**
 * @file: util.js 工具类
 * @since: 2020-09-24
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ MIT
 */

module.exports = {
    showLog: (msg, type = 'info') => {
        const iconMap = {
            info: '\033[34mℹ \033[39m',
            error: '\033[91m✖ \033[39m',
            build: '\033[35m⚒ \033[39m'
        };
        process.stdout.write(Buffer.from(iconMap[type] + msg));
    }
};

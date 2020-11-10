module.exports = {
    env: {
        test: {
            presets: [
                '@babel/preset-typescript'
            ],
            plugins: ['istanbul']
        }
    }
};

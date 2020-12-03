const path = require('path');

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Billing QA Test',
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@views': path.resolve(__dirname, 'src/views'),
                '@structures': path.resolve(__dirname, 'src/structures'),
                '@services': path.resolve(__dirname, 'src/services'),
                '@data': path.resolve(__dirname, 'src/data'),
                '@helpers': path.resolve(__dirname, 'src/helpers'),
            },
        },
    },
};

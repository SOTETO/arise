module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/arise/'
        : '/arise/',
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')

        // clear all existing loaders.
        // if you don't do this, the loader below will be appended to
        // existing loaders of the rule.
        svgRule.uses.clear()

        // add replacement loader(s)
        svgRule
            .use('svg-inline-loader')
            .loader('svg-inline-loader')
    },
    // introduced due to Vue-CLI issue (https://github.com/vuejs/vue-cli/issues/4400)
    devServer: {
        // historyApiFallback: false,
        disableHostCheck: true,
        public: "0.0.0.0",
        sockPath: "/arise/sockjs-node/",
        port: 8080,
    },
    configureWebpack: {
        plugins: [
            {
                apply: compiler => {
                    compiler.hooks.entryOption.tap("entry", () => {
                        const clients = compiler.options.entry.app;
                        for (const index in clients) {
                            if (clients[index].match(/sockjs-node/)) {
                                clients[index] = clients[index].replace(
                                    "0.0.0.0/sockjs-node",
                                    "0.0.0.0&sockPath=/arise/sockjs-node/",
                                );
                            }
                        }
                    });
                },
            },
        ],
    },
}

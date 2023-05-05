const getWebpackConfig = require('@nx/react/plugins/webpack');

function getCustomWebpackConfig(webpackConfig) {
    const config = getWebpackConfig(webpackConfig);
    const isProduction = webpackConfig.mode === 'production';

    if (!isProduction) {
        config.resolve.alias = {
            'react-native$': 'react-native-web',
        };

        config.resolve.extensions = [
            '.web.tsx',
            '.web.ts',
            '.tsx',
            '.ts',
            '.web.jsx',
            '.web.js',
            '.jsx',
            '.js',
        ]

        config.module.rules.push(
            {
                test: /\.ttf$/,
                loader: require.resolve('file-loader'),
                options: { esModule: false, name: 'static/media/[path][name].[ext]' },
            },
            {
                test: /\.(tsx|ts|jsx|js|mjs)$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.(tsx|ts|jsx|js|mjs)$/,
                exclude: function (content) {
                    return (
                        /node_modules/.test(content) &&
                        !/\/react-native-vector-icons\//.test(content) &&
                        !/\/react-native-ratings\//.test(content)
                    );
                },
                use: {
                    loader: require.resolve('@nx/webpack/src/utils/web-babel-loader.js'),
                    options: {
                        presets: [
                            [
                                '@nx/react/babel',
                                {
                                    runtime: 'automatic',
                                    useBuiltIns: 'usage',
                                },
                            ],
                        ],
                    },
                },
            },
        );
    }

    return config;
}

module.exports = getCustomWebpackConfig;

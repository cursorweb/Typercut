const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = env => {
    if (env.mode == "development") {
        return {
            mode: "development",
            devtool: "inline-source-map",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: "ts-loader",
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader'
                        ]
                    },
                ],
            },
            resolve: {
                extensions: [".ts", ".js"],
            },
            plugins: [
                new MiniCssExtractPlugin(),
            ],
            output: {
                filename: "main.js",
                path: path.resolve(__dirname, "dist"),
            },
        };
    } else {
        return {
            mode: "production",
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: "ts-loader",
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader'
                        ]
                    },
                ],
            },
            resolve: {
                extensions: [".ts", ".js"],
            },
            plugins: [
                new MiniCssExtractPlugin(),
            ],
            optimization: {
                minimize: true,
                minimizer: [
                    "...",
                    new CssMinimizerPlugin()
                ],
            },
            output: {
                filename: "main.js",
                path: path.resolve(__dirname, "dist"),
            },
        };
    }
};
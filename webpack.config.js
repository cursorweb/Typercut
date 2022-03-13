const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                ],
            },
            resolve: {
                extensions: [".ts", ".js"],
            },
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
                ],
            },
            resolve: {
                extensions: [".ts", ".js"],
            },
            output: {
                filename: "main.js",
                path: path.resolve(__dirname, "dist"),
            },
        };
    }
};
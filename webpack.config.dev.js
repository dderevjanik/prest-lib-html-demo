const path = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");

const devConfig = {
    mode: "development",
    entry: "./src/index.ts",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 9003
    },
    plugins: [
        new CheckerPlugin()
    ]
}

module.exports = devConfig;

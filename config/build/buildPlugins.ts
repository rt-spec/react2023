import webpack, { WebpackPluginFunction, WebpackPluginInstance }  from "webpack";
import HTMLWebpackPlugin from 'html-webpack-plugin'; 
import { BuildOption } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins( {paths} : BuildOption) : WebpackPluginInstance[]{
    return [
        new HTMLWebpackPlugin({
          template : paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename : 'css/[name].[contenthash:8].css',
          chunkFilename : 'css/[name].[contenthash:8].css',
        })
      ]
}
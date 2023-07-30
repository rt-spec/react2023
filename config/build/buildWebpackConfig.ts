import  webpack  from 'webpack';
import { BuildOption } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolves';
import { buildDevServer } from './buildDevServer';
export function buildWebpackConfig(option : BuildOption) : webpack.Configuration {
    const {mode, paths, isDev} = option
    return {
        mode : mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean : true
        },
        plugins : buildPlugins(option),
        module: {
          rules: buildLoaders(option)
        },
        resolve: buildResolvers(option),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer : isDev ? buildDevServer(option) : undefined
        }
    }
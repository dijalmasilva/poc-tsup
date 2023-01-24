import {defineConfig} from "tsup";
import {sassPlugin, postcssModules} from 'esbuild-sass-plugin'

export default defineConfig((options) => ({
    entry: ['src/**/*.ts', 'src/**/*.tsx'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    format: ['esm', "cjs"],
    treeshake: true,
    esbuildPlugins: [
        sassPlugin({
            transform: postcssModules({}),
        })
    ]
}))
#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import chalk from 'chalk'

import esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'

const ImageTestVarLang_ROOT = new URL('../', import.meta.url)
const PACKAGES_ROOT = new URL('./packages/', ImageTestVarLang_ROOT)

function buildBundle (srcFile, bundleFile, { minify = true, standalone = '', plugins, target, format } = {}) {
  return esbuild.build({
    bundle: true,
    sourcemap: true,
    entryPoints: [srcFile],
    outfile: bundleFile,
    platform: 'browser',
    minify,
    keepNames: true,
    plugins,
    target,
    format,
  }).then(() => {
    if (minify) {
      console.info(chalk.green(`✓ Built Minified Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    } else {
      console.info(chalk.green(`✓ Built Bundle [${standalone}]:`), chalk.magenta(bundleFile))
    }
  })
}

await fs.mkdir(new URL('./ImageTestVarLang/dist', PACKAGES_ROOT), { recursive: true })
await fs.mkdir(new URL('./@ImageTestVarLang/locales/dist', PACKAGES_ROOT), { recursive: true })

const methods = [
  buildBundle(
    './packages/ImageTestVarLang/index.mjs',
    './packages/ImageTestVarLang/dist/ImageTestVarLang.min.mjs',
    { standalone: 'ImageTestVarLang (ESM)', format: 'esm' },
  ),
  buildBundle(
    './packages/ImageTestVarLang/bundle-legacy.mjs',
    './packages/ImageTestVarLang/dist/ImageTestVarLang.legacy.min.js',
    {
      standalone: 'ImageTestVarLang (with polyfills)',
      target: 'es5',
      plugins:[babel({
        config:{
          compact: false,
          highlightCode: false,
          inputSourceMap: true,

          browserslistEnv: 'legacy',
          presets: [['@babel/preset-env',  {
            loose: false,
            targets: { ie:11 },
            useBuiltIns: 'entry',
            corejs: { version: '3.24', proposals: true },
          }]],
        },
      })],
    },
  ),
  buildBundle(
    './packages/ImageTestVarLang/bundle.mjs',
    './packages/ImageTestVarLang/dist/ImageTestVarLang.min.js',
    { standalone: 'ImageTestVarLang', format: 'iife' },
  ),

]

// Build mini versions of  locales
const localesModules = await fs.opendir(new URL('./@ImageTestVarLang/locales/src/', PACKAGES_ROOT))
for await (const dirent of localesModules) {
  if (!dirent.isDirectory() && dirent.name.endsWith('.js')) {
    const localeName = path.basename(dirent.name, '.js')
    methods.push(
      buildBundle(
        `./packages/@ImageTestVarLang/locales/src/${localeName}.js`,
        `./packages/@ImageTestVarLang/locales/dist/${localeName}.min.js`,
        { minify: true },
      ),
    )
  }
}

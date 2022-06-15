import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import buble from '@rollup/plugin-buble'
import eslint from '@rollup/plugin-eslint'
import dev from 'rollup-plugin-dev'
import replace from '@rollup/plugin-replace'

const isDev = process.env.NODE_ENV === 'development'
const input = 'src/index.ts'

function getPlugins({ onDevServer = false, onEslint = false }) {
  return [
    onEslint ? eslint() : null,
    json(),
    nodeResolve(),
    commonjs(),
    vue(),
    typescript({
      objectHashIgnoreUnknownHack: true
    }),
    buble(),
    isDev ? null : terser(),
    filesize(),
    onDevServer ? dev({ dirs: ['dist', 'example'] }) : null,
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ].filter(Boolean)
}

// 外链 - 外部依赖的名称，放在该处的npm包不会参与打包
const external = ['vue', 'vue-class-component', 'vue-property-decorator', 'decimal.js']

export default defineConfig([
  isDev
    ? {
        input,
        output: {
          file: 'dist/index.umd.js',
          format: 'umd',
          sourcemap: false,
          name: 'FeAmountInput',
          globals: {
            vue: 'Vue'
          }
        },
        plugins: getPlugins({ onDevServer: true }),
        external: ['vue']
      }
    : null,
  {
    input,
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: false
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: false
      }
    ],
    plugins: getPlugins({ onEslint: true }),
    external
  }
]).filter(Boolean)

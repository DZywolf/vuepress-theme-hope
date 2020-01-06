import { PluginOptionAPI } from 'vuepress-types';
import { resolve } from 'path';
import { tsoptions } from '@mr-hope/vuepress-shared-utils';

const pluginConfig: PluginOptionAPI = {
  name: 'back-to-top',

  enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.ts'),

  /** Typescript Support */
  chainWebpack: chainWebpackConfig => {
    chainWebpackConfig.resolve.extensions.add('.ts');

    chainWebpackConfig.module
      .rule('ts')
      .test(/\.ts$/u)
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        appendTsSuffixTo: [/\.vue$/u],
        compilerOptions: tsoptions
      });
  },

  globalUIComponents: 'BackToTop'
};

module.exports = pluginConfig;

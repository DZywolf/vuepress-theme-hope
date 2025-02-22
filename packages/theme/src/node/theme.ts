import { path } from "@vuepress/utils";

import { resolveAlias } from "./alias";
import { updateBundlerConfig } from "./bundler";
import { extendsPage } from "./extendsPage";
import { checkStyle, covertFrontmatter, covertThemeConfig } from "./migrate";
import { getLayoutConfig } from "./layout";
import { getPluginConfig, usePlugin } from "./plugins";
import { prepareConfigFile } from "./prepare";
import { prepareSidebarData } from "./sidebar";
import { checkSocialMediaIcons } from "./socialMedia";
import { getStatus } from "./status";
import { getThemeConfig } from "./themeConfig";
import { prepareThemeColorScss } from "./themeColor";

import type { Page, ThemeFunction } from "@vuepress/core";
import type { HopeThemeOptions, HopeThemePageData } from "../shared";

export const hopeTheme =
  (
    options: HopeThemeOptions,
    // TODO: remove this option in stable release
    legacy = false
  ): ThemeFunction =>
  (app) => {
    const {
      plugins = {},
      hostname,
      iconAssets,
      iconPrefix,
      addThis,
      backToTop,
      ...themeOptions
    } = legacy ? covertThemeConfig(options) : options;

    if (legacy) checkStyle(app);

    const status = getStatus(options);
    const themeConfig = getThemeConfig(app, themeOptions, status);
    const icons = status.enableBlog ? checkSocialMediaIcons(themeConfig) : {};

    usePlugin(app, plugins);

    if (app.env.isDebug) console.log("Theme plugin options:", plugins);

    return {
      name: "vuepress-theme-hope",

      alias: resolveAlias(app.env.isDebug),

      define: () => ({
        ENABLE_BLOG: status.enableBlog,
        ENABLE_VISITOR: status.enableVisitor,
      }),

      extendsBundlerOptions: (config: unknown, app): void =>
        updateBundlerConfig(config, app),

      extendsPage: (page): void => {
        if (legacy)
          page.frontmatter = covertFrontmatter(
            page.frontmatter,
            page.filePathRelative || ""
          );

        extendsPage(
          themeConfig,
          plugins,
          page as Page<HopeThemePageData>,
          app.env.isDev
        );
      },

      onPrepared: (): Promise<void> =>
        Promise.all([
          prepareSidebarData(app, themeConfig),
          prepareThemeColorScss(app, themeConfig),
          app.writeTemp(
            `theme-hope/socialMedia.js`,
            `export const icons = ${JSON.stringify(icons)}`
          ),
        ]).then(() => void 0),

      plugins: getPluginConfig(plugins, themeConfig, {
        addThis,
        backToTop,
        hostname,
        iconAssets,
        iconPrefix,
      }),

      layouts: getLayoutConfig(app, plugins),

      templateBuild: path.resolve(
        __dirname,
        "../../templates/index.build.html"
      ),

      clientConfigFile: (app) => prepareConfigFile(app, status),
    };
  };

export const hope = hopeTheme;

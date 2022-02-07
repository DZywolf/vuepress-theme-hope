import type {
  HopeThemeBlogConfig,
  HopeThemeBlogLocaleData,
  HopeThemeBlogOptions,
} from "./blog";
import type { HopeThemeEncryptOptions } from "./encrypt";

export interface HopeThemeFeatureLocaleData {
  blogLocales: HopeThemeBlogLocaleData;
}

export interface HopeThemeFeatureLocaleOptions {
  /**
   * Blog feature
   */
  blog?: HopeThemeBlogOptions;
}

export interface HopeThemeFeatureLocaleConfig {
  blog: HopeThemeBlogConfig;
}

export type DarkmodeConfig =
  | "auto-switch"
  | "auto"
  | "switch"
  | "force-dark"
  | "disable";

export interface HopeThemeFeatureOptions {
  /**
   * Dark mode support options:
   *
   * - `'auto-switch'`: "off | automatic | on" three-stage switch (Default)
   * - `'switch'`: "Close | Open" toggle switch
   * - `'auto'`: Automatically decide whether to apply dark mode based on user device’s color-scheme or current time
   * - `'disable'`: disable dark mode
   *
   * 深色模式支持选项:
   *
   * - `'auto-switch'`: "关闭 | 自动 | 打开" 的三段式开关 (默认)
   * - `'switch'`: "关闭 | 打开" 的切换式开关
   * - `'auto'`: 自动根据用户设备主题或当前时间决定是否应用深色模式
   * - `'disable'`: 禁用深色模式
   *
   * @default 'auto-switch'
   */
  darkmode?: DarkmodeConfig;

  // TODO: Support themeColor
  /**
   * Theme color configuration.
   *
   * 主题色选项配置。
   *
   * @default { blue: '#2196f3', red: '#f26d6d', green: '#3eaf7c', orange: '#fb9b5f' }
   */
  themeColor?: Record<string, string> | false;

  /**
   * Whether enable blog feature
   *
   * 是否启用博客功能
   *
   * @default true
   */
  enableBlog?: boolean;

  /**
   * Encrypt config
   *
   * 加密配置
   */
  encrypt?: HopeThemeEncryptOptions;
}

export type HopeThemeFeatureConfig = Required<HopeThemeFeatureOptions>;
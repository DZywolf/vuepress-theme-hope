import { defineComponent, h } from "vue";
import { usePageFrontmatter } from "@vuepress/client";

import DropTransition from "@theme-hope/components/transitions/DropTransition.vue";
import HomeFeatures from "@theme-hope/components/home/HomeFeatures";
import MarkdownContent from "@theme-hope/components/MarkdownContent";
import ProjectHero from "@theme-hope/components/home/ProjectHero";

import type { VNode } from "vue";
import type { HopeThemeProjectHomePageFrontmatter } from "../../../shared";

import "../../styles/project-home.scss";

export default defineComponent({
  name: "ProjectHome",

  setup() {
    const frontmatter =
      usePageFrontmatter<HopeThemeProjectHomePageFrontmatter>();

    return (): VNode =>
      h(
        "main",
        {
          class: "home project",
          "aria-labelledby":
            frontmatter.value.heroText === null ? undefined : "main-title",
        },
        [
          h(ProjectHero),
          h(DropTransition, { delay: 0.16 }, () => h(HomeFeatures)),
          h(DropTransition, { delay: 0.24 }, () =>
            h(MarkdownContent, { custom: true })
          ),
        ]
      );
  },
});
---
home: true
title: Home
icon: home
heroImage: /logo.svg
actions:
  - text: Project Home
    link: /home.html
    type: primary

  - text: Introduction
    link: /guide/
    type: secondary

features:
  - title: Simplicity First
    icon: flag
    details: Minimal setup with markdown-centered project structure helps you focus on writing.

  - title: Vue-Powered
    icon: vuejs
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.

  - title: Performant
    icon: fast
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.

  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.

  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.

  - title: Bundlers
    details: Both Webpack and Vite are supported. Choose the one you like!

footer: MIT Licensed | Copyright © 2018-present Evan You
---

### As Easy as 1, 2, 3

<CodeGroup>
<CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

</CodeGroupItem>

<CodeGroupItem title="NPM">

```bash
# install in your project
npm install -D vuepress@next

# create a markdown file

echo '# Hello VuePress' > README.md

# start writing

npx vuepress dev

# build to static files

npx vuepress build

```

</CodeGroupItem>
</CodeGroup>
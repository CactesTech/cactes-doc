import { defineUserConfig } from 'vuepress'
import { defaultTheme  } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Cactes Documentations',
  description: 'All knowledge you need to know about our products',
  theme: defaultTheme({
    logo: 'https://img.cactes.com/dochero.png',
    repo: 'CactesTech/cactes-doc',
    docsDir: 'docs',
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: [
          {
            text: 'Cactes',
            link: 'https://cactes.com',
          },
          {
            text: 'Products',
            children: [
              {
                text: 'Modules',
                children: [
                  '/reference/config.md',
                  '/reference/frontmatter.md',
                  '/reference/components.md',
                  '/reference/plugin-api.md',
                  '/reference/theme-api.md',
                  '/reference/client-api.md',
                  '/reference/node-api.md',
                ],
              },
              {
                text: 'Solutions',
                children: [
                  '/reference/bundler/vite.md',
                  '/reference/bundler/webpack.md',
                ],
              },
              {
                text: 'Default Theme',
                children: [
                  '/reference/default-theme/config.md',
                  '/reference/default-theme/frontmatter.md',
                  '/reference/default-theme/components.md',
                  '/reference/default-theme/markdown.md',
                  '/reference/default-theme/styles.md',
                  '/reference/default-theme/extending.md',
                ],
              },
            ],
          },
        ],
        // sidebar
        sidebar: [
          {
            text: 'ULB100',
            link: '/ulb100/',
            children: [
              '/guide/README.md',
              '/guide/getting-started.md',
              '/guide/configuration.md',
              '/guide/page.md',
              '/guide/markdown.md',
              '/guide/assets.md',
              '/guide/i18n.md',
              '/guide/deployment.md',
              '/guide/theme.md',
              '/guide/plugin.md',
              '/guide/bundler.md',
              '/guide/migration.md',
            ],
          },
          {
            text: 'BLB200',
            link: '/blb200/',
            children: [
              '/guide/README.md',
              '/guide/getting-started.md',
              '/guide/configuration.md',
              '/guide/page.md',
              '/guide/markdown.md',
              '/guide/assets.md',
              '/guide/i18n.md',
              '/guide/deployment.md',
              '/guide/theme.md',
              '/guide/plugin.md',
              '/guide/bundler.md',
              '/guide/migration.md',
            ],
          },
          {
            text: 'BLB300',
            link: '/blb300/',
            children: [
              '/guide/README.md',
              '/guide/getting-started.md',
              '/guide/configuration.md',
              '/guide/page.md',
              '/guide/markdown.md',
              '/guide/assets.md',
              '/guide/i18n.md',
              '/guide/deployment.md',
              '/guide/theme.md',
              '/guide/plugin.md',
              '/guide/bundler.md',
              '/guide/migration.md',
            ],
          },
        ],
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      // /**
      //  * Chinese locale config
      //  */
      // '/zh/': {
      //   // navbar
      //   navbar: navbarZh,
      //   selectLanguageName: '简体中文',
      //   selectLanguageText: '选择语言',
      //   selectLanguageAriaLabel: '选择语言',
      //   // sidebar
      //   sidebar: sidebarZh,
      //   // page meta
      //   editLinkText: '在 GitHub 上编辑此页',
      //   lastUpdatedText: '上次更新',
      //   contributorsText: '贡献者',
      //   // custom containers
      //   tip: '提示',
      //   warning: '注意',
      //   danger: '警告',
      //   // 404 page
      //   notFound: [
      //     '这里什么都没有',
      //     '我们怎么到这来了？',
      //     '这是一个 404 页面',
      //     '看起来我们进入了错误的链接',
      //   ],
      //   backToHome: '返回首页',
      //   // a11y
      //   openInNewWindow: '在新窗口打开',
      //   toggleColorMode: '切换颜色模式',
      //   toggleSidebar: '切换侧边栏',
      // },
    },
  })
});

// export default {

// }
// // export default themeConfig = {
// //   themeConfig: {
// //   }
// // }

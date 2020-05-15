module.exports = {
  title: 'Front docs',
  description: 'frontend docs',
  themeConfig: {
    logo: 'https://static.yapo.cl/shared/icons/logo.svg',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Get started',
        link: '/basic/'
      },
      {
        text: 'Contact',
        items: [
          {
            text: 'docs repo',
            link: 'https://www.twitter.com/',
            target:'_blank'
          },
          {
            text: 'docs vuepress',
            link: 'https://vuepress.vuejs.org/',
            target:'_blank'
          }
        ]
      },
    ],
    sidebar: [
      '/basic/',
      '/basic/example'
    ],
    head: [
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    plugins: ['@vuepress/active-header-links']
  }
}

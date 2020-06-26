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
        text: 'Links',
        items: [
          {
            text: 'docs repo',
            link: 'https://github.mpi-internal.com/Yapo/frontend-docs',
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
      '/basic/team'
    ],
    head: [
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    plugins: ['@vuepress/active-header-links']
  }
}

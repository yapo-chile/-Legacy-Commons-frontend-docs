module.exports = {
  title: 'Front docs',
  description: 'frontend docs',
  themeConfig: {
    logo: 'https://static.yapo.cl/shared/icons/logo.svg',
    locales: {
      '/': {
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
        plugins: ['@vuepress/active-header-links'],
      },
      '/es/': {
        nav: [
          {
            text: 'Inicio',
            link: '/es/'
          },
          {
            text: 'Empezar',
            link: '/es/basic/'
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
          '/es/basic/',
          '/es/basic/team'
        ],
        plugins: ['@vuepress/active-header-links'],
      },
    },
    head: [
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png"}],
      ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue En',
    },
    '/es/': {
      lang: 'es-CH',
      title: 'VuePress',
      description: 'Vue Es',
    }
  },
}

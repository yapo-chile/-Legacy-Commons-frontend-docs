const page = (lang) => (title, path) => ([lang + path, title]);
const group = (lang) => (title, path, children) => ({
  title,
  path: lang + path,
  collapsable: false,
  children,
});

const link = (lang) => (text, link, target) => ({ text, link: lang + link, target });
const dropdown = (text, items) => ({ text, items });


const esPage = page('/es');
const esGroup = group('/es');
const esLink = link('/es');
const enPage = page('');
const enGroup = group('');
const enLink = link('');

module.exports = {
  base: '/yapo/frontend-docs/',
  title: 'Front docs',
  description: 'frontend docs',
  themeConfig: {
    logo: 'https://static.yapo.cl/shared/icons/logo.svg',
    locales: {
      '/': {
        nav: [
          enLink('Home', '/'),
          enLink('Getting Started', '/basic/'),
          enLink('Stack', '/stack/'),
          enLink('Practices', '/practices/'),
          dropdown('Links', [
            enLink('docs repo', 'https://github.mpi-internal.com/Yapo/frontend-docs', '_blank'),
            enLink('docs vuepress', 'https://vuepress.vuejs.org/', '_blank'),
          ]),
        ],
        sidebar: [
          enPage('Getting Started', '/basic/'),
          enPage('Team', '/basic/team'),
          enGroup('Practices', '/practices/', [
            enPage('BEM', '/practices/BEM/'),
          ]),
          enGroup('Stack', '/stack', [
            enGroup('Microservices', '/stack/microservices/', [
              enPage('Podium', '/stack/microservices/podium/'),
            ]),
            enPage('Experiments', '/stack/experiments/'),
            enGroup('Widgets', '/stack/widgets/', [
              enPage('Yapo Legacy fe', '/stack/widgets/yapo-legacy-fe/'),
              enPage('Custom Elements', '/stack/widgets/custom-elements/'),
            ]),
            enGroup('Regress', '/stack/regress/', [
              enPage('Develop remotely', '/stack/regress/develop-remotely/'),
            ]),
            enPage('Test', '/stack/test/'),
          ]),
        ],
        plugins: ['@vuepress/active-header-links'],
      },
      '/es/': {
        nav: [
          esLink('Inicio', '/'),
          esLink('Empezar', '/basic/'),
          esLink('Stack', '/stack/'),
          esLink('Practicas', '/practices/'),
          dropdown('Links', [
            enLink('docs repo', 'https://github.mpi-internal.com/Yapo/frontend-docs', '_blank'),
            enLink('docs vuepress', 'https://vuepress.vuejs.org/', '_blank'),
          ]),
        ],
        sidebar: [
          esPage('Para Comenzar', '/basic/'),
          esPage('Equipo', '/basic/team'),
          esGroup('Practicas', '/practices/', [
            esGroup('Practicas', '/practices/', [
              esPage('BEM', '/practices/BEM/'),
            ]),
          ]),
          esGroup('Stack', '/stack', [
            esGroup('Microservicios', '/stack/microservices/', [
              esPage('Podium', '/stack/microservices/podium/'),
            ]),
            esPage('Experimentos', '/stack/experiments/'),
            esGroup('Widgets', '/stack/widgets/', [
              esPage('Yapo Legacy fe', '/stack/widgets/yapo-legacy-fe/'),
              esPage('Custom Elements', '/stack/widgets/custom-elements/'),
            ]),
            esGroup('Regress', '/stack/regress/', [
              esPage('Desarrolla en tu contenedor', '/stack/regress/develop-remotely/'),
            ]),
            esPage('Test', '/stack/test/'),
          ]),
        ],
        plugins: ['@vuepress/active-header-links'],
      },
    },
    head: [
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/yapo/frontend-docs/favicon.png" }],
      ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    ],
    sidebarDepth: 3,
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
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '../assets'
      }
    }
  }
}

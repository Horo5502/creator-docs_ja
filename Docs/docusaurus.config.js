// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VRChat CreatorDocs 非公式日本語翻訳',
  tagline: 'Learn, create and share using our tools and documentation.',
  url: 'https://horo5502.github.io',
  baseUrl: '/creator-docs_ja/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Horo5502', // Usually your GitHub org/user name.
  projectName: 'creator-docs-ja', // Usually your repo name.

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: {
          path: 'releases',
          routeBasePath: 'releases',
          blogTitle: 'VRChat SDK Releases',
          blogDescription: 'The latest VRChat SDK releases and patch notes.',
          showReadingTime: false,
          blogSidebarTitle: 'History',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-EWZ9D3QY7X',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      navbar: {
        title: 'VRChat CreatorDocs 非公式日本語翻訳',
        logo: {
          alt: 'VRChat Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: 'worlds', label: 'Worlds', position: 'left'},
          {to: 'avatars', label: 'Avatars', position: 'left'},
          {to: '/about-this-site', label: 'このサイトについて', position: 'left'},
          {to: 'economy', label: 'Creator Economy', position: 'left'},
          {to: 'releases', label: 'Releases', position: 'left'},
          {to: 'https://udonsharp.docs.vrchat.com', label: 'UdonSharp', position: 'right'},
          {to: 'https://vcc.docs.vrchat.com', label: 'Creator Companion', position: 'right'},
          {to: 'worlds/clientsim', label: 'ClientSim', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {to: 'worlds', label: 'Worlds'},
              {to: 'avatars', label: 'Avatars'},
              {to: 'economy', label: 'Creator Economy'},
            ],
          },
          {
            title: 'ツール',
            items: [
              {to: 'https://udonsharp.docs.vrchat.com', label: 'UdonSharp'},
              {to: 'https://vcc.docs.vrchat.com', label: 'Creator Companion'},
              {to: 'worlds/clientsim', label: 'ClientSim'},
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/vrchat',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vrchat',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'Releases',
                to: '/releases',
              },
              {
                label: 'Roadmap',
                to: '/roadmap',
              },
              {
                label: 'プライバシーポリシー',
                to: '/privacy-policy'
              },
              {
                label: 'このサイトのGitHub',
                href: 'https://github.com/horo5502/creator-docs_ja'
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp']
      },
    }),
};

module.exports = config;

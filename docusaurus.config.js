const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DEVOPS WIKI',
  tagline: 'loong\'s devops wiki',
  url: 'https://zhoulf1006.github.io/devops-wiki',
  baseUrl: '/devops-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'zhoulf1006', // Usually your GitHub org/user name.
  projectName: 'devops-wiki', // Usually your repo name.
  plugins: ['@docusaurus/theme-live-codeblock',
    [require.resolve('docusaurus-lunr-search'), {
    languages: ['en', 'zh'] // language codes
  }],
  ],
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/practice/index',
          activeBasePath: 'docs/practice',
          position: 'left',
          label: 'Practice',
        },
        {
          href: 'https://github.com/zhoulf1006/devops-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Aloong Built with Docusaurus.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/zhoulf1006/devops-wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/zhoulf1006/devops-wiki/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

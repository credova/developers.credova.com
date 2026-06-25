import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Credova Developer Documentation",
  favicon: "img/favicon.ico",
  url: "https://developers.publicsquare.com",
  baseUrl: "/",
  organizationName: "publicsq",
  projectName: "developers.publicsquare.com",
  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // Mermaid
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-openapi-docs"],

  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/publicsq/developers.publicsquare.com/tree/master/",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Credova",
        href: "/",
        target: "_self",
        src: "-",
      },
      items: [
        {
          type: "doc",
          docId: "guides/index",
          position: "left",
          label: "Guides",
        },
        {
          type: "doc",
          docId: "api/index",
          position: "left",
          label: "API",
        },
        {
          type: "doc",
          docId: "sdks/index",
          position: "left",
          label: "SDKs",
        },
        {
          href: "https://github.com/publicsq/developers.publicsquare.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp", "bash", "json", "java", "python", "php"],
    },
    mermaid: {
      theme: {
        light: "base",
        dark: "base",
      },
      options: {
        themeVariables: {
          primaryColor: "#E5F5F8",
          primaryBorderColor: "#006F91",
          primaryTextColor: "#27282B",
          textColor: "var(--psq-mermaid-text-color)",
          actorTextColor: "var(--psq-mermaid-actor-color)",
          nodeTextColor: "var(--psq-mermaid-text-color)",
        },
      },
    },
    colorMode: {
      defaultMode: "dark",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    function () {
      return {
        name: "node-polyfill-fallbacks",
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                path: false,
              },
            },
          };
        },
      };
    },
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          accounts: {
            specPath: "https://api.publicsquare.com/swagger/accounts/swagger.yaml",
            outputDir: "docs/api/accounts",
            showExtensions: true,
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          financial: {
            specPath: "https://api.publicsquare.com/swagger/financial/swagger.yaml",
            outputDir: "docs/api/financial",
            showExtensions: true,
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        disableInDev: false,
      },
    ],
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
        docsDir: 'docs',
        ignoreFiles: ['advanced/*', 'private/*', 'api/accounts/**', 'api/financial/**'],
        title: 'Credova Developer Documentation',
        description: 'Guides, concepts, and API reference for the Credova payments platform.',
        excludeImports: true,
        removeDuplicateHeadings: true,
        generateMarkdownFiles: true,
        preserveDirectoryStructure: false,
        includeOrder: [
          'getting-started/*',
          'guides/*',
          'api/*',
        ],
        includeUnmatchedLast: true,
      },
    ],
    [
      "docusaurus-plugin-copy-page-button",
      {
        injectButton: false,
        markdownUrl: true,
      },
    ],
  ],
};

export default config;

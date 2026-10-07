import {credovaDark, credovaLight} from "./src/prism/credova";
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
  clientModules: [require.resolve("./src/client/revealTabAnchor.ts")],

  headTags: [
    {tagName: "link", attributes: {rel: "preconnect", href: "https://fonts.googleapis.com"}},
    {tagName: "link", attributes: {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"}},
  ],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Outfit:wght@500;600&display=swap",
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
          editUrl: "https://github.com/credova/developers.credova.com/tree/master/",
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
          href: "https://github.com/credova/developers.credova.com",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: credovaLight,
      darkTheme: credovaDark,
      additionalLanguages: ["csharp", "bash", "json", "java", "python", "php"],
    },
    mermaid: {
      theme: {
        light: "base",
        dark: "base",
      },
      options: {
        themeVariables: {
          primaryColor: "#e6f1f5",
          primaryBorderColor: "#006f91",
          primaryTextColor: "#0e2a33",
          textColor: "var(--cr-mermaid-text-color)",
          actorTextColor: "var(--cr-mermaid-actor-color)",
          nodeTextColor: "var(--cr-mermaid-text-color)",
        },
      },
    },
    footer: {
      links: [
        {
          title: "API Reference",
          items: [
            {label: "Authentication", to: "/api/authentication"},
            {label: "Errors", to: "/api/errors"},
            {label: "Idempotency", to: "/api/idempotency"},
          ],
        },
        {
          title: "Concepts",
          items: [
            {label: "Payment Intents", to: "/concepts/payment-intents"},
            {label: "Webhooks", to: "/concepts/webhooks"},
            {label: "Fraud and disputes", to: "/concepts/fraud-details-and-prevention"},
          ],
        },
        {
          title: "SDKs",
          items: [
            {label: "JavaScript Elements", to: "/sdks/web/javascript"},
            {label: "React Elements", to: "/sdks/web/react"},
          ],
        },
        {
          title: "Go live",
          items: [
            {label: "Testing", to: "/api/testing"},
            {label: "Production checklist", to: "/guides/production-checklist"},
            {label: "Credova Portal", href: "https://portal.publicsquare.com/"},
          ],
        },
      ],
      copyright: `Credova Developer Documentation`,
    },
    colorMode: {
      defaultMode: "dark",
    },
    languageTabs: [
      {highlight: "bash", language: "curl", logoClass: "curl", variants: ["curl"]},
      {highlight: "javascript", language: "nodejs", logoClass: "nodejs", variants: ["axios"]},
      {highlight: "python", language: "python", logoClass: "python", variants: ["requests"]},
      {highlight: "csharp", language: "csharp", logoClass: "csharp", variants: ["httpclient"]},
      {highlight: "php", language: "php", logoClass: "php", variants: ["curl"]},
    ],
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
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {from: "/guides/payment-methods/collect-cards", to: "/guides/payments/elements/accept-card-payments"},
          {from: "/guides/payments/process-card-payments", to: "/guides/payments/elements/accept-card-payments"},
          {from: "/guides/payment-methods/collect-apple-pay", to: "/guides/payments/elements/accept-apple-pay"},
          {from: "/guides/payments/process-apple-pay-payments", to: "/guides/payments/elements/accept-apple-pay"},
          {from: "/guides/payment-methods/collect-google-pay", to: "/guides/payments/elements/accept-google-pay"},
          {from: "/guides/payments/process-google-pay-payments", to: "/guides/payments/elements/accept-google-pay"},
          {from: "/guides/payment-methods/collect-bank-accounts", to: "/guides/payments/elements/accept-bank-account-payments"},
          {from: "/guides/payment-methods/collect-verified-bank-accounts", to: "/guides/payments/elements/accept-bank-account-payments"},
          {from: "/guides/payments/process-ach-payments", to: "/guides/payments/elements/accept-bank-account-payments"},
          {from: "/guides/payments/process-inline-card-payments", to: "/guides/payments/direct-api/payment-with-card-details"},
          {from: "/guides/payouts/process-inline-card-payouts", to: "/guides/payouts/process-card-payouts"},
          {from: "/guides/refunds/cancel-refunds", to: "/guides/refunds/refund-payments"},
          {from: "/guides/transactions/view-settlements", to: "/guides/transactions/search-and-view-transactions"},
        ],
      },
    ],
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

import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";
import apiSidebar from "./docs/api/accounts/sidebar";
import financialApiSidebar from "./docs/api/financial/sidebar";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      id: "guides/index",
      type: "doc",
      customProps: {
        icon: "/img/icons/rocket.svg",
      },
    },
    {
      type: "category",
      label: "Payment Methods",
      customProps: {
        icon: "/img/icons/payment-methods.svg",
      },
      items: [
        "guides/payment-methods/collect-cards",
        "guides/payment-methods/collect-apple-pay",
        "guides/payment-methods/collect-google-pay",
        "guides/payment-methods/collect-bank-accounts",
        "guides/payment-methods/collect-verified-bank-accounts"
      ],
    },
    {
      type: "category",
      label: "Payments",
      customProps: {
        icon: "/img/icons/credit-card.svg",
      },
      items: [
        "guides/payments/process-card-payments",
        "guides/payments/process-apple-pay-payments",
        "guides/payments/process-google-pay-payments",
        "guides/payments/authorize-and-capture-payments",
        "guides/payments/verify-cards",
        "guides/payments/process-ach-payments",
        "guides/payments/cancel-payments"
      ],
    },
    {
      type: "category",
      label: "Refunds",
      customProps: {
        icon: "/img/icons/light-receipt-rotate-left.svg",
      },
      items: ["guides/refunds/refund-payments", "guides/refunds/cancel-refunds"],
    },
    {
      type: "category",
      label: "Payouts",
      customProps: {
        icon: "/img/icons/money-bill-wave.svg",
      },
      items: ["guides/payouts/process-card-payouts", "guides/payouts/process-ach-payouts", "guides/payouts/cancel-payouts"],
    },
    {
      type: "category",
      label: "Transactions",
      customProps: {
        icon: "/img/icons/money-bill-transfer.svg",
      },
      items: ["guides/transactions/search-and-view-transactions", "guides/transactions/view-settlements"],
    },
    {
      type: "category",
      label: "Marketplaces",
      customProps: {
        icon: "/img/icons/shop.svg",
      },
      items: ["guides/marketplaces/onboard-sellers", "guides/marketplaces/transfer-funds-to-sellers", "guides/marketplaces/transfer-funds-from-sellers"],
    },
    {
      id: "guides/production-checklist/index",
      type: "doc",
      customProps: {
        icon: "/img/icons/ballot-check-light.svg",
      },
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Concepts",
      customProps: {
        icon: "/img/icons/graduation-cap.svg",
      },
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/accounts",
        "concepts/api-keys",
        "concepts/transactions",
        "concepts/payment-intents",
        "concepts/payment-transfer-intents",
        "concepts/dispute-cases",
        "concepts/fraud-details-and-prevention",
        "concepts/webhooks",
        "concepts/onboarding"
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api",
      customProps: {
        icon: "/img/icons/developers.svg",
      },
    },
    {
      type: "link",
      label: "SDKs",
      href: "/sdks",
      customProps: {
        icon: "/img/icons/cube.svg",
      },
    },
  ],
  api: [
    {
      id: "api/index",
      type: "doc",
    },
    {
      id: "api/authentication",
      type: "doc",
    },
    {
      id: "api/request-correlation",
      type: "doc",
    },
    {
      id: "api/pagination",
      type: "doc",
    },
    {
      id: "api/errors",
      type: "doc",
    },
    {
      id: "api/ip-addresses",
      type: "doc",
    },
    {
      id: "api/rate-limits",
      type: "doc",
    },
    {
      id: "api/idempotency",
      type: "doc",
    },
    {
      id: "api/testing",
      type: "doc",
    },
    {
      type: "category",
      label: "Accounts",
      link: {
        type: "generated-index",
        title: "Accounts Reference",
      },
      items: apiSidebar,
    },
    {
      type: "category",
      label: "Payments",
      link: {
        type: "generated-index",
        title: "Payments Reference",
      },
      items: financialApiSidebar,
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
      customProps: {
        icon: "/img/icons/book.svg",
      },
    },
    {
      type: "link",
      label: "SDKs",
      href: "/sdks",
      customProps: {
        icon: "/img/icons/cube.svg",
      },
    },
  ],
  sdk: [
    "sdks/index",
    {
      type: "category",
      label: "Web SDKs",
      items: [
        {
          id: "sdks/web/javascript/index",
          type: "doc",
          label: "JavaScript Elements",
        },
        {
          id: "sdks/web/react/index",
          type: "doc",
          label: "React Elements",
        },
      ],
    },
    {
      type: "category",
      label: "eCommerce Plugins",
      items: [
        {
          id: "plugins/bigcommerce-payments/index",
          type: "doc",
        },
        {
          id: "plugins/magento-payments/index",
          type: "doc",
        },
        {
          id: "plugins/woocommerce-payments/index",
          type: "doc",
        },
        {
          id: "plugins/shopify-payments/index",
          type: "doc",
        },
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/guides",
      customProps: {
        icon: "/img/icons/book.svg",
      },
    },
    {
      type: "link",
      label: "API Reference",
      href: "/api",
      customProps: {
        icon: "/img/icons/developers.svg",
      },
    },
  ],
};

export default sidebars;

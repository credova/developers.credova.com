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
      label: "Payments",
      collapsed: false,
      customProps: {
        icon: "/img/icons/credit-card.svg",
      },
      items: [
        {
          type: "category",
          label: "Credova Elements",
          items: [
            "guides/payments/elements/accept-card-payments",
            "guides/payments/elements/accept-bank-account-payments",
            "guides/payments/elements/accept-apple-pay",
            "guides/payments/elements/accept-google-pay",
            "guides/payments/process-3ds-iframe-payments",
            "guides/payments/process-3ds-redirect-payments",
            "guides/payment-methods/recollect-cvc"
          ],
        },
        {
          type: "category",
          label: "Direct API",
          items: [
            "guides/payments/direct-api/payment-with-card-details",
            "guides/payments/direct-api/save-cards",
            "guides/payments/direct-api/save-bank-accounts",
          ],
        },
        {
          type: "category",
          label: "eCommerce Plugins",
          items: [
            {type: "link", label: "Shopify", href: "/plugins/shopify-payments"},
            {type: "link", label: "WooCommerce", href: "/plugins/woocommerce-payments"},
            {type: "link", label: "Magento", href: "/plugins/magento-payments"},
            {type: "link", label: "BigCommerce", href: "/plugins/bigcommerce-payments"}
          ],
        },
        {
          type: "category",
          label: "Payment Options",
          items: ["guides/payments/authorize-and-capture-payments", "guides/payments/verify-cards"],
        },
        {
          type: "category",
          label: "After the Payment",
          items: [
            "guides/payments/cancel-payments",
            "guides/refunds/refund-payments",
            "guides/transactions/search-and-view-transactions"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Payouts",
      customProps: {
        icon: "/img/icons/money-bill-wave.svg",
      },
      items: [
        "guides/payouts/process-card-payouts",
        "guides/payouts/process-ach-payouts",
        "guides/payouts/cancel-payouts",
      ],
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
      type: "category",
      label: "Go Live",
      customProps: {
        icon: "/img/icons/ballot-check-light.svg",
      },
      items: ["guides/production-checklist/index", {type: "link", label: "Testing", href: "/api/testing"}, "support"],
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
        "concepts/bank-accounts",
        "concepts/api-keys",
        "concepts/transactions",
        "concepts/payment-intents",
        "concepts/payment-transfer-intents",
        "concepts/3d-secure",
        "concepts/dispute-cases",
        "concepts/fraud-details-and-prevention",
        "concepts/webhooks",
        "concepts/onboarding"
      ],
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
        {
          id: "sdks/web/changelog",
          type: "doc",
          label: "Changelog",
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
  ],
};

export default sidebars;

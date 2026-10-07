import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import styles from "./index.module.css";

import Shopify from "@site/static/img/plugins/platforms/shopify.svg";
import WooCommerce from "@site/static/img/plugins/platforms/woocommerce.svg";
import Magento from "@site/static/img/plugins/platforms/magento.svg";

type LinkItem = { label: string; to: string };

type Integration = {
  name: string;
  description: string;
  links?: LinkItem[];
  platforms?: boolean;
};

const integrations: Integration[] = [
  {
    name: "Credova Elements",
    description: "Customers pay in your web app, and card data never reaches your servers.",
    links: [
      { label: "Accept card payments", to: "/guides/payments/elements/accept-card-payments" },
      { label: "Accept bank account payments", to: "/guides/payments/elements/accept-bank-account-payments" },
      { label: "Accept Apple Pay", to: "/guides/payments/elements/accept-apple-pay" },
      { label: "Accept Google Pay", to: "/guides/payments/elements/accept-google-pay" },
      { label: "Elements SDK reference", to: "/sdks" },
    ],
  },
  {
    name: "Direct API",
    description: "Send cards from your own servers. Requires PCI certification.",
    links: [
      { label: "Create a payment with card details", to: "/guides/payments/direct-api/payment-with-card-details" },
      { label: "Save a card, then charge it", to: "/guides/payments/direct-api/save-cards" },
      { label: "Payments API reference", to: "/api/financial/payments" },
    ],
  },
  {
    name: "eCommerce plugins",
    description: "Install a plugin on your store platform. No code needed.",
    platforms: true,
  },
];

const paymentOptions: LinkItem[] = [
  { label: "Authorize now, capture later", to: "/guides/payments/authorize-and-capture-payments" },
  { label: "Verify the card first", to: "/guides/payments/verify-cards" },
  { label: "Add 3D Secure with Elements", to: "/concepts/3d-secure" },
];

const afterPayment: LinkItem[] = [
  { label: "Cancel", to: "/guides/payments/cancel-payments" },
  { label: "Refund", to: "/guides/refunds/refund-payments" },
  { label: "Transactions and settlements", to: "/guides/transactions/search-and-view-transactions" },
  { label: "Webhooks", to: "/concepts/webhooks" },
];

const products = [
  {
    name: "Payouts",
    description: "Send money to cards and bank accounts.",
    links: [
      { label: "Send payouts", to: "/guides/payouts/send-payouts" },
      { label: "Send a payout with card details", to: "/guides/payouts/payout-with-card-details" },
      { label: "Cancel a payout", to: "/guides/payouts/send-payouts#cancel-a-payout" },
    ],
  },
  {
    name: "Marketplaces",
    description: "Onboard sellers and move funds to and from them.",
    links: [
      { label: "Onboard sellers", to: "/guides/marketplaces/onboard-sellers" },
      { label: "Transfer funds to sellers", to: "/guides/marketplaces/transfer-funds-to-sellers" },
      { label: "Transfer funds from sellers", to: "/guides/marketplaces/transfer-funds-from-sellers" },
      { label: "Payment transfer intents", to: "/concepts/payment-transfer-intents" },
      { label: "Accounts API reference", to: "/category/accounts" },
    ],
  },
];

const LinkList = ({ links }: { links: LinkItem[] }) => (
  <ul className={styles.links}>
    {links.map((link) => (
      <li key={link.to}>
        <Link to={link.to}>{link.label}</Link>
      </li>
    ))}
  </ul>
);

const Platforms = () => (
  <ul className={styles.platforms}>
    <li>
      <Link to="/plugins/shopify-payments">
        <Shopify />
        Shopify
      </Link>
    </li>
    <li>
      <Link to="/plugins/woocommerce-payments">
        <WooCommerce />
        WooCommerce
      </Link>
    </li>
    <li>
      <Link to="/plugins/magento-payments">
        <Magento />
        Magento
      </Link>
    </li>
    <li>
      <Link to="/plugins/bigcommerce-payments">
        <ThemedImage
          alt=""
          sources={{
            light: "/img/plugins/platforms/bigcommerce-light.svg",
            dark: "/img/plugins/platforms/bigcommerce-dark.svg",
          }}
        />
        BigCommerce
      </Link>
    </li>
  </ul>
);

export default function Home() {
  return (
    <Layout description="Accept payments, send payouts and move marketplace funds with the Credova API.">
      <div className={styles.home}>
        <main className={styles.page}>
          <header className={styles.hero}>
            <div>
              <h1>Build with Credova</h1>
              <p>Accept payments, send payouts and move marketplace funds with one API.</p>
              <div className={styles.actions}>
                <Link className={clsx(styles.button, styles.primary)} to="/guides">
                  Get started
                </Link>
                <Link className={clsx(styles.button, styles.secondary)} to="/api">
                  API reference
                </Link>
              </div>
            </div>
          </header>

          <section className={styles.payments} aria-labelledby="payments">
            <div className={styles.sectionHead}>
              <h2 id="payments">Payments</h2>
              <p>Where do the card details come from?</p>
            </div>
            <div className={styles.integrations}>
              {integrations.map((integration) => (
                <article className={styles.integration} key={integration.name}>
                  <h3>{integration.name}</h3>
                  <p>{integration.description}</p>
                  {integration.platforms ? <Platforms /> : <LinkList links={integration.links} />}
                </article>
              ))}
            </div>
            <div className={styles.lifecycle}>
              <article className={styles.integration}>
                <h3>Payment options</h3>
                <p>Choose these when you create the payment.</p>
                <LinkList links={paymentOptions} />
              </article>
              <article className={styles.integration}>
                <h3>After the payment</h3>
                <p>Act on a payment that already exists.</p>
                <LinkList links={afterPayment} />
              </article>
            </div>
          </section>

          <div className={styles.products}>
            {products.map((product) => (
              <section className={styles.product} key={product.name} aria-labelledby={product.name.toLowerCase()}>
                <h2 id={product.name.toLowerCase()}>{product.name}</h2>
                <p>{product.description}</p>
                <LinkList links={product.links} />
              </section>
            ))}
          </div>
        </main>

      </div>
    </Layout>
  );
}

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import styles from "./index.module.css";

import JavaScriptLogo from "@site/static/img/sdk/logos/javascript.svg";
import ReactLogo from "@site/static/img/sdk/logos/react.svg";
import Shopify from "@site/static/img/plugins/platforms/shopify.svg";
import WooCommerce from "@site/static/img/plugins/platforms/woocommerce.svg";
import Magento from "@site/static/img/plugins/platforms/magento.svg";

type LinkItem = { label: string; to: string };

type Integration = {
  name: string;
  description: string;
  links?: LinkItem[];
  sdks?: { label: string; to: string; Logo: React.ComponentType<React.SVGProps<SVGSVGElement>> }[];
  platforms?: boolean;
};

const paymentMethods: Integration[] = [
  {
    name: "Credova Elements",
    description: "Customers enter payment details in your web app, and card data never reaches your servers.",
    links: [
      { label: "Save cards", to: "/guides/payment-methods/cards" },
      { label: "Save bank accounts", to: "/guides/payment-methods/bank-accounts" },
      { label: "Set up Apple Pay", to: "/guides/payment-methods/apple-pay" },
      { label: "Set up Google Pay", to: "/guides/payment-methods/google-pay" },
    ],
    sdks: [
      { label: "JavaScript", to: "/sdks/web/javascript", Logo: JavaScriptLogo },
      { label: "React", to: "/sdks/web/react", Logo: ReactLogo },
    ],
  },
  {
    name: "Direct API",
    description: "Save payment methods by calling the API from your own servers. Your organization must be PCI certified.",
    links: [
      { label: "Save a card", to: "/guides/payment-methods/cards#save-a-card-from-your-servers" },
      { label: "Save a bank account", to: "/guides/payment-methods/bank-accounts#save-a-bank-account-from-your-servers" },
      { label: "Manage saved payment methods", to: "/guides/payment-methods/manage-saved-payment-methods" },
    ],
  },
  {
    name: "eCommerce plugins",
    description: "Install a plugin on your store platform. No code needed.",
    platforms: true,
  },
];

const payments: Integration[] = [
  {
    name: "Accept payments",
    description: "Pay with a saved payment method, or send the card or bank account details in the request.",
    links: [
      { label: "Accept card payments", to: "/guides/payments/accept-card-payments" },
      { label: "Accept bank account payments", to: "/guides/payments/accept-bank-account-payments" },
      { label: "Accept Apple Pay", to: "/guides/payments/accept-apple-pay" },
      { label: "Accept Google Pay", to: "/guides/payments/accept-google-pay" },
    ],
  },
  {
    name: "Payment options",
    description: "Choose these when you create the payment.",
    links: [
      { label: "Authorize now, capture later", to: "/guides/payments/authorize-and-capture-payments" },
      { label: "Verify the card first", to: "/guides/payments/verify-cards" },
      { label: "Charge a card on file", to: "/guides/payments/card-on-file-and-recurring-payments" },
      { label: "Add 3D Secure", to: "/concepts/3d-secure" },
    ],
  },
  {
    name: "After the payment",
    description: "Act on a payment that already exists.",
    links: [
      { label: "Cancel", to: "/guides/payments/cancel-payments" },
      { label: "Refund", to: "/guides/refunds/refund-payments" },
      { label: "Transactions and settlements", to: "/guides/transactions/search-and-view-transactions" },
      { label: "Webhooks", to: "/concepts/webhooks" },
    ],
  },
];

const payouts: Integration[] = [
  {
    name: "Send payouts",
    description: "Send money to a saved card or bank account.",
    links: [
      { label: "Send card payouts", to: "/guides/payouts/process-card-payouts" },
      { label: "Send bank account payouts", to: "/guides/payouts/process-ach-payouts" },
    ],
  },
  {
    name: "After the payout",
    description: "Act on a payout that already exists.",
    links: [
      { label: "Cancel a payout", to: "/guides/payouts/cancel-payouts" },
      { label: "Transactions and settlements", to: "/guides/transactions/search-and-view-transactions" },
      { label: "Webhooks", to: "/concepts/webhooks" },
    ],
  },
];

const marketplaces = {
  name: "Marketplaces",
  description: "Onboard sellers and move funds to and from them.",
  links: [
    { label: "Onboard sellers", to: "/guides/marketplaces/onboard-sellers" },
    { label: "Transfer funds to sellers", to: "/guides/marketplaces/transfer-funds-to-sellers" },
    { label: "Transfer funds from sellers", to: "/guides/marketplaces/transfer-funds-from-sellers" },
  ],
};

const Cards = ({ items }: { items: Integration[] }) => (
  <>
    {items.map((item) => (
      <article className={styles.integration} key={item.name}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        {item.platforms ? <Platforms /> : <LinkList links={item.links ?? []} />}
        {item.sdks && (
          <ul className={styles.sdks} aria-label="Elements SDKs">
            {item.sdks.map(({ label, to, Logo }) => (
              <li key={to}>
                <Link to={to}>
                  <Logo aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </article>
    ))}
  </>
);

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

          <section className={styles.payments} aria-labelledby="payment-methods">
            <div className={styles.sectionHead}>
              <h2 id="payment-methods">Payment methods</h2>
            </div>
            <div className={styles.integrations}>
              <Cards items={paymentMethods} />
            </div>
          </section>

          <section className={styles.payments} aria-labelledby="payments">
            <div className={styles.sectionHead}>
              <h2 id="payments">Payments</h2>
            </div>
            <div className={styles.integrations}>
              <Cards items={payments} />
            </div>
          </section>

          <section className={styles.payments} aria-labelledby="payouts">
            <div className={styles.sectionHead}>
              <h2 id="payouts">Payouts</h2>
            </div>
            <div className={styles.lifecycle}>
              <Cards items={payouts} />
            </div>
          </section>

          <section className={styles.product} aria-labelledby="marketplaces">
            <h2 id="marketplaces">{marketplaces.name}</h2>
            <p>{marketplaces.description}</p>
            <LinkList links={marketplaces.links} />
          </section>
        </main>

      </div>
    </Layout>
  );
}

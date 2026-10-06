import Layout from "@theme/Layout";
import React from "react";
import clsx from "clsx";
import { Card } from "../components/shared/Card";
import ThemedImage from "@theme/ThemedImage";
import styles from "./index.module.css";

import ReactSvg from "@site/static/img/sdk/logos/react.svg";
import JavaScript from "@site/static/img/sdk/logos/javascript.svg";
import Shopify from "@site/static/img/plugins/platforms/shopify.svg";
import WooCommerce from "@site/static/img/plugins/platforms/woocommerce.svg";
import Magento from "@site/static/img/plugins/platforms/magento.svg";

import GettingStartedImage from "@site/static/img/icons/rocket-gradient.svg";
import CollectCardsImage from "@site/static/img/icons/hand-holding-card-gradient.svg";
import ProcessCardPaymentsImage from "@site/static/img/icons/process-card-gradient.svg";

import DevelopersImage from "@site/static/img/icons/developers-gradient.svg";
import ConceptsImage from "@site/static/img/icons/graduation-cap-gradient.svg";
import GuidesImage from "@site/static/img/icons/book-gradient.svg";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home() {
  return (
    <Layout>
      <div className={clsx(["col", styles.container])}>
        <header>
          <h1>Credova Docs</h1>
          <p>Credova will guide you on how to safely collect payment methods and process transactions.</p>
        </header>
        <main>
          <div className={styles["explore-cards-container"]}>
            <h2>Start Building</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/guides"
                heading={<Card.PrimaryHeader>Getting Started</Card.PrimaryHeader>}
                column
                raised
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <GettingStartedImage />
                  </div>
                }
              >
                A quick overview of how Credova works and key concepts.
              </Card>

              <Card
                href="/guides/browser/accept-card-payments"
                heading={<Card.PrimaryHeader>Collect Cards</Card.PrimaryHeader>}
                column
                raised
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <CollectCardsImage />
                  </div>
                }
              >
                Integrate Credova Elements to securely collect cards from your customers.
              </Card>

              <Card
                href="/guides/browser/accept-card-payments"
                heading={<Card.PrimaryHeader>Process Payments</Card.PrimaryHeader>}
                column
                raised
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <ProcessCardPaymentsImage />
                  </div>
                }
              >
                Learn how to process card payments.
              </Card>
            </div>
          </div>

          <div className={styles["sdks"]}>
            <h2>Credova SDKs</h2>
            <div className={styles["sdks-container"]}>
              <div>
                Web SDKs
                <div className={styles["sdk-column"]}>
                  <Card href="/sdks/web/react" img={<ReactSvg />} className={styles.sdk}>
                    React
                  </Card>
                  <Card href="/sdks/web/javascript" img={<JavaScript />} className={styles.sdk}>
                    Javascript
                  </Card>
                </div>
              </div>

              <div>
                eCommerce Plugins
                <div className={styles["sdk-column"]}>
                  <Card href="/plugins/magento-payments" img={<Magento />} className={styles.sdk}>
                    Magento
                  </Card>
                  <Card href="/plugins/shopify-payments" img={<Shopify />} className={styles.sdk}>
                    Shopify
                  </Card>
                  <Card href="/plugins/woocommerce-payments" img={<WooCommerce />} className={styles.sdk}>
                    WooCommerce
                  </Card>
                  <Card
                    href="/plugins/bigcommerce-payments"
                    img={
                      <div className={styles["logo-container"]}>
                        <ThemedImage
                          sources={{
                            light: "/img/plugins/platforms/bigcommerce-light.svg",
                            dark: "/img/plugins/platforms/bigcommerce-dark.svg",
                          }}
                        />
                      </div>
                    }
                    className={styles.sdk}
                  >
                    BigCommerce
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["explore-cards-container"]}>
            <h2>Explore Credova</h2>
            <div className={styles["explore-cards"]}>
              <Card
                href="/api"
                heading={<Card.PrimaryHeader>API Reference</Card.PrimaryHeader>}
                column
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <DevelopersImage />
                  </div>
                }
              >
                API endpoints to manage your account and process transactions with Credova.
              </Card>
              <Card
                href="/concepts"
                heading={<Card.PrimaryHeader>Concepts</Card.PrimaryHeader>}
                column
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <ConceptsImage />
                  </div>
                }
              >
                Learn about key concepts of Credova's platform.
              </Card>
              <Card
                href="/guides"
                heading={<Card.PrimaryHeader>Guides</Card.PrimaryHeader>}
                column
                className={styles["explore-card"]}
                img={
                  <div className="card-img-container">
                    <GuidesImage />
                  </div>
                }
              >
                Step-by-step guides to integrate with Credova.
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

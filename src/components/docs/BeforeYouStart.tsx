import React, { PropsWithChildren } from "react";
import Link from "@docusaurus/Link";

import styles from "./BeforeYouStart.module.css";

const keyDetails = {
  publishable: {
    name: "Publishable Key",
    use: "Loads Credova Elements in the browser. It is safe to put in frontend code.",
  },
  secret: {
    name: "Secret Key",
    use: "Authenticates requests from your server. Never send it to the browser.",
  },
};

type KeyType = keyof typeof keyDetails;

export const BeforeYouStart = ({ keys = ["secret"], children }: PropsWithChildren<{ keys?: KeyType[] }>) => (
  <div className={styles.container}>
    <dl className={styles.rows}>
      <div className={styles.row}>
        <dt>Credova account</dt>
        <dd>
          <Link href="https://portal.publicsquare.com/auth/login?screen_hint=signup">Sign up</Link> or{" "}
          <Link href="https://portal.publicsquare.com/">sign in</Link> to the Credova Portal.
        </dd>
      </div>
      {keys.map((key) => (
        <div className={styles.row} key={key}>
          <dt>
            <code>{keyDetails[key].name}</code>
          </dt>
          <dd>{keyDetails[key].use}</dd>
        </div>
      ))}
    </dl>
    {children && <div className={styles.note}>{children}</div>}
    <div className={styles.actions}>
      <Link href="https://portal.publicsquare.com/developers/api-keys">Copy your keys from the Portal</Link>
      <Link to="/api/testing">Test and live keys</Link>
    </div>
  </div>
);

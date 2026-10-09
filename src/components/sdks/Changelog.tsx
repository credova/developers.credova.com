import React, { useEffect, useState } from "react";
import clsx from "clsx";

import styles from "./Changelog.module.css";
import { ChangeKind, parseChangelog, Release } from "./parseChangelog";

const SOURCE = "https://raw.githubusercontent.com/credova/elements/master/CHANGELOG.md";
const SOURCE_PAGE = "https://github.com/credova/elements/blob/master/CHANGELOG.md";
const RELEASE_URL = "https://github.com/credova/elements/releases/tag/v";

const KIND_ORDER: ChangeKind[] = ["breaking", "feature", "fix", "performance", "revert"];
const KIND_LABEL: Record<ChangeKind, string> = {
  breaking: "Breaking",
  feature: "New",
  fix: "Fixed",
  performance: "Faster",
  revert: "Reverted",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(new Date(date));

const ReleaseEntry = ({ release, latest }: { release: Release; latest: boolean }) => {
  const kinds = KIND_ORDER.filter((kind) => release.changes[kind]?.length);

  return (
    <li id={`v${release.version}`} className={styles.release}>
      <div className={styles.meta}>
        <h2 className={styles.version}>
          <a href={`${RELEASE_URL}${release.version}`}>{release.version}</a>
        </h2>
        <time className={styles.date} dateTime={release.date}>
          {formatDate(release.date)}
        </time>
        {latest && <span className={styles.latest}>Latest</span>}
      </div>
      <div className={styles.body}>
        {kinds.length === 0 && <p className={styles.quiet}>Maintenance release. No user-facing changes.</p>}
        {kinds.map((kind) => (
          <div key={kind} className={clsx(styles.group, styles[kind])}>
            <span className={styles.label}>{KIND_LABEL[kind]}</span>
            <ul className={styles.changes}>
              {release.changes[kind]?.map((change) => (
                <li key={change.text}>
                  {change.scope && <code>{change.scope}</code>} {change.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  );
};

export const Changelog = ({ visible = 8 }: { visible?: number }) => {
  const [releases, setReleases] = useState<Release[]>();
  const [failed, setFailed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(SOURCE, { signal: controller.signal })
      .then((response) => (response.ok ? response.text() : Promise.reject(new Error(String(response.status)))))
      .then((markdown) => setReleases(parseChangelog(markdown)))
      .catch((error) => {
        if (error.name !== "AbortError") setFailed(true);
      });
    return () => controller.abort();
  }, []);

  if (failed) {
    return (
      <p className={styles.quiet}>
        The changelog could not be loaded. See it on <a href={SOURCE_PAGE}>GitHub</a>.
      </p>
    );
  }

  if (!releases) {
    return (
      <p className={styles.quiet} aria-live="polite">
        Loading changelog…
        <noscript>
          {" "}
          See the changelog on <a href={SOURCE_PAGE}>GitHub</a>.
        </noscript>
      </p>
    );
  }

  const shown = showAll ? releases : releases.slice(0, visible);

  return (
    <>
      <ol className={styles.list}>
        {shown.map((release, index) => (
          <ReleaseEntry key={release.version} release={release} latest={index === 0} />
        ))}
      </ol>
      {!showAll && releases.length > visible && (
        <button type="button" className={styles.more} onClick={() => setShowAll(true)}>
          Show {releases.length - visible} older releases
        </button>
      )}
    </>
  );
};

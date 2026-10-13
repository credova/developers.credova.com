import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { isActiveSidebarItem } from "@docusaurus/plugin-content-docs/client";
import ThemedImage from "@theme/ThemedImage";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import styles from "./styles.module.css";
import { Props } from "@theme/DocSidebarItem/Link";

export default function DocSidebarItemLink({ item, onItemClick, activePath, level, index, ...props }: Props) {
  const { href, label, className, autoAddBaseUrl } = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li className={clsx(ThemeClassNames.docs.docSidebarItemLink, ThemeClassNames.docs.docSidebarItemLinkLevel(level), "menu__list-item", className)} key={label}>
      <Link
        className={clsx("menu__link", item.customProps?.icon && styles["no-padding"], !isInternalLink && styles.menuExternalLink, {
          "menu__link--active": isActive,
        })}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {item.customProps?.icon && (
          <ThemedImage
            alt=""
            className={clsx({
              [styles.icon]: true,
              [styles.active]: isActive,
            })}
            sources={{
              light: item.customProps?.icon as string,
              dark: item.customProps?.icon as string,
            }}
          />
        )}
        <span className={styles.label}>{label}</span>
        {!isInternalLink && (
          <ThemedImage
            alt=""
            sources={{
              light: "/img/sidebar/light/external.svg",
              dark: "/img/sidebar/dark/external.svg",
            }}
          />
        )}
      </Link>
    </li>
  );
}

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  filterDocCardListItems,
  findFirstSidebarItemLink,
  useCurrentSidebarSiblings,
  useDocById,
} from "@docusaurus/plugin-content-docs/client";
import type { PropSidebarItem, PropSidebarItemCategory, PropSidebarItemLink } from "@docusaurus/plugin-content-docs";
import type { Props } from "@theme/DocCardList";

import styles from "./styles.module.css";

const methodPattern = /\b(get|post|put|patch|delete|head)\b/;

const tileLinkLimit = 4;

const methodOf = (item: PropSidebarItem) => item.className?.match(methodPattern)?.[1];

const isLink = (item: PropSidebarItem): item is PropSidebarItemLink => item.type === "link";

const isCategory = (item: PropSidebarItem): item is PropSidebarItemCategory => item.type === "category";

const isEndpoint = (item: PropSidebarItem): item is PropSidebarItemLink =>
  isLink(item) && Boolean(item.className?.includes("api-method"));

const useDescription = (docId: string | undefined, label: string) => {
  const doc = useDocById(docId);
  const description = doc?.description?.trim();
  return description && description !== label ? description : undefined;
};

const EndpointRow = ({ item }: { item: PropSidebarItemLink }) => {
  const description = useDescription(item.docId ?? undefined, item.label);
  const method = methodOf(item);

  return (
    <li className={styles.row}>
      <Link to={item.href} className={styles.rowLink}>
        <span className={clsx(styles.method, method && styles[method])}>{method}</span>
        <span className={styles.text}>
          <span className={styles.name}>{item.label}</span>
          {description && <span className={styles.description}>{description}</span>}
        </span>
      </Link>
    </li>
  );
};

const EndpointList = ({ items, className }: { items: PropSidebarItemLink[]; className?: string }) => (
  <ul className={clsx(styles.list, className)}>
    {items.map((item) => (
      <EndpointRow key={item.href} item={item} />
    ))}
  </ul>
);

const DocRow = ({ item }: { item: PropSidebarItemLink }) => {
  const description = useDescription(item.docId ?? undefined, item.label);

  return (
    <li>
      <Link to={item.href} className={styles.docLink}>
        <span className={styles.name}>{item.label}</span>
        {description && <span className={styles.description}>{description}</span>}
      </Link>
    </li>
  );
};

const CategoryTile = ({ item }: { item: PropSidebarItemCategory }) => {
  const docId = item.link?.type === "doc" ? item.link.id : undefined;
  const description = useDescription(docId, item.label);
  const href = item.href ?? findFirstSidebarItemLink(item);
  const links = item.items.filter(isLink);
  const visible = links.slice(0, tileLinkLimit);
  const hidden = links.length - visible.length;

  return (
    <section className={styles.tile}>
      <h3 className={styles.tileTitle}>{href ? <Link to={href}>{item.label}</Link> : item.label}</h3>
      {description && <p className={styles.description}>{description}</p>}
      <ul className={styles.tileLinks}>
        {visible.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>{link.label}</Link>
          </li>
        ))}
        {hidden > 0 && href && (
          <li>
            <Link to={href} className={styles.more}>
              {hidden} more
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
};

const IndexGrid = ({ items, className }: { items: PropSidebarItem[]; className?: string }) => {
  const docs = items.filter(isLink);
  const categories = items.filter(isCategory);

  return (
    <div className={className}>
      {docs.length > 0 && (
        <ul className={styles.docs}>
          {docs.map((item) => (
            <DocRow key={item.href} item={item} />
          ))}
        </ul>
      )}
      {categories.length > 0 && (
        <div className={styles.grid}>
          {categories.map((item) => (
            <CategoryTile key={item.label} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

const DocCardListForCurrentCategory = (props: Props) => {
  const items = useCurrentSidebarSiblings();
  return <DocCardList {...props} items={items} />;
};

export default function DocCardList(props: Props) {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentCategory {...props} />;
  }

  const filtered = filterDocCardListItems(items);
  if (filtered.length > 0 && filtered.every(isEndpoint)) {
    return <EndpointList items={filtered} className={className} />;
  }

  return <IndexGrid items={filtered} className={className} />;
}

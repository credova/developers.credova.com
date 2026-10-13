import type {PrismTheme} from "prism-react-renderer";

const theme = (c: {
  text: string;
  background: string;
  comment: string;
  punctuation: string;
  key: string;
  string: string;
  number: string;
  keyword: string;
  fn: string;
  deleted: string;
}): PrismTheme => ({
  plain: {color: c.text, backgroundColor: c.background},
  styles: [
    {types: ["comment", "prolog", "doctype", "cdata"], style: {color: c.comment, fontStyle: "italic"}},
    {types: ["punctuation", "operator"], style: {color: c.punctuation}},
    {types: ["property", "attr-name", "tag", "selector"], style: {color: c.key}},
    {types: ["string", "char", "attr-value", "inserted", "url", "regex"], style: {color: c.string}},
    {types: ["number", "boolean", "constant", "symbol"], style: {color: c.number}},
    {types: ["keyword", "atrule", "important", "builtin"], style: {color: c.keyword, fontWeight: "500"}},
    {types: ["function", "class-name", "variable", "parameter"], style: {color: c.fn}},
    {types: ["deleted"], style: {color: c.deleted}},
  ],
});

export const credovaLight = theme({
  text: "#1b3640",
  background: "var(--cr-surface)",
  comment: "#526870",
  punctuation: "#4f666e",
  key: "#004059",
  string: "#8a5a00",
  number: "#a8323e",
  keyword: "#006f91",
  fn: "#00546f",
  deleted: "#b8332a",
});

export const credovaDark = theme({
  text: "#dde3e6",
  background: "var(--cr-surface)",
  comment: "#8a9399",
  punctuation: "#959ea4",
  key: "#5cc8dd",
  string: "#e8b96a",
  number: "#f29a8f",
  keyword: "#8fdae9",
  fn: "#b5e6f0",
  deleted: "#f28b82",
});

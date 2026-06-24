import React, {JSX} from "react";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation } from "@docusaurus/router";
import CopyPageButton from "docusaurus-plugin-copy-page-button/react";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  const { pathname } = useLocation();
  const show = /^\/(guides|concepts)(\/|$)/.test(pathname);
  return (
    <>
      {show && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <CopyPageButton markdownUrl />
        </div>
      )}
      <Content {...props} />
    </>
  );
}

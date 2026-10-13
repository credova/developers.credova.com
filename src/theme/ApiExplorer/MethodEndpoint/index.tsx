import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { useTypedSelector } from "@theme/ApiItem/hooks";

export interface Props {
  method: string;
  path: string;
  context?: "endpoint" | "callback";
}

const displayPath = (path: string) => path.replace(/{([a-z0-9-_]+)}/gi, ":$1");

const Endpoint = ({ method, path, serverUrl }: { method: string; path: string; serverUrl?: React.ReactNode }) => (
  <>
    <div className="openapi__method-endpoint">
      <span className={`openapi__method-badge openapi__method-badge--${method.toLowerCase()}`}>
        {method === "event" ? "Webhook" : method.toUpperCase()}
      </span>
      {method !== "event" && (
        <code className="openapi__method-endpoint-path">
          {serverUrl}
          {displayPath(path)}
        </code>
      )}
    </div>
    <div className="openapi__divider" />
  </>
);

const ServerUrl = ({ context }: { context?: Props["context"] }) => {
  const serverValue = useTypedSelector((state: any) => state.server.value);
  if (context === "callback" || !serverValue?.url) return null;

  let url = serverValue.url.replace(/\/$/, "");
  Object.entries(serverValue.variables ?? {}).forEach(([name, variable]: [string, any]) => {
    url = url.replace(`{${name}}`, variable?.default ?? "");
  });

  return <BrowserOnly>{() => url}</BrowserOnly>;
};

export default function MethodEndpoint({ method, path, context }: Props) {
  if (!ExecutionEnvironment.canUseDOM) {
    return <Endpoint method={method} path={path} />;
  }

  return <Endpoint method={method} path={path} serverUrl={<ServerUrl context={context} />} />;
}

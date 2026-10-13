import React, { useEffect, useState } from "react";

interface Props {
  pkg: string;
}

export function LatestVersion({ pkg }: Props) {
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://registry.npmjs.org/${pkg}/latest`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : undefined))
      .then((data) => {
        if (typeof data?.version === "string") setVersion(data.version);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [pkg]);

  return (
    <a href={`https://www.npmjs.com/package/${pkg}`}>
      <code>{version ?? "latest"}</code>
    </a>
  );
}

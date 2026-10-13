import React, { useEffect, useRef, useState, type ComponentProps } from "react";
import MDXComponents from "@theme-original/MDXComponents";

const Table = (props: ComponentProps<"table">) => {
  const ref = useRef<HTMLTableElement>(null);
  const [scrolls, setScrolls] = useState(false);

  useEffect(() => {
    const table = ref.current;
    if (!table) return;
    const measure = () => setScrolls(table.scrollWidth > table.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(table);
    return () => observer.disconnect();
  }, []);

  return <table ref={ref} tabIndex={scrolls ? 0 : undefined} {...props} />;
};

export default { ...MDXComponents, table: Table };

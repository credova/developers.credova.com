import React from "react";
import clsx from "clsx";
import { Example } from "@theme/Example";
import Markdown from "@theme/Markdown";
import { getSchemaName } from "docusaurus-theme-openapi-docs/lib/markdown/schema";

import { plainQualifierMessage } from "../SchemaItem";

export interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
}

export interface Props {
  className: string;
  param: {
    description: string;
    example: any;
    examples: Record<string, ExampleObject> | undefined;
    name: string;
    required: boolean;
    deprecated: boolean;
    schema: any;
    enumDescriptions?: [string, string][];
  };
}

const formatValue = (value: unknown) => (typeof value === "string" ? value : JSON.stringify(value));

const enumTable = (rows?: [string, string][]) => {
  if (!rows?.length) return undefined;
  const body = rows.map(([value, text]) => `| \`${value}\` | ${text.replaceAll("\n", "<br/>")} |`).join("\n");
  return `| Value | Description |\n| --- | --- |\n${body}`;
};

export default function ParamsItem({ param }: Props) {
  const { name, required, deprecated, description, enumDescriptions } = param;
  const schema = { ...(param.schema ?? {}), type: param.schema?.type ?? "any" };
  const defaultValue = schema.items?.default ?? schema.default;
  const example = param.example ?? schema.example;
  const examples = param.examples ?? schema.examples;
  const constraint = plainQualifierMessage(schema);
  const table = enumTable(enumDescriptions);

  return (
    <div className="openapi-params__list-item">
      <span className="openapi-schema__container">
        <strong className={clsx("openapi-schema__property", { "openapi-schema__strikethrough": deprecated })}>{name}</strong>
        <span className="openapi-schema__type">{getSchemaName(schema)}</span>
        {required && <span className="openapi-schema__required">required</span>}
        {deprecated && <span className="openapi-schema__deprecated">deprecated</span>}
      </span>
      {description && (
        <div className="openapi-params__description">
          <Markdown>{description}</Markdown>
        </div>
      )}
      {table && <Markdown>{table}</Markdown>}
      <div className="openapi-params__meta">
        {constraint && <Markdown>{constraint}</Markdown>}
        {schema.const !== undefined && (
          <div>
            <strong>Constant </strong>
            <code>{formatValue(schema.const)}</code>
          </div>
        )}
        {defaultValue !== undefined && (
          <div>
            <strong>Default </strong>
            <code>{formatValue(defaultValue)}</code>
          </div>
        )}
        <Example example={example} />
        <Example examples={examples} />
      </div>
    </div>
  );
}

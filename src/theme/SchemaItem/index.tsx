import React from "react";
import OriginalSchemaItem from "@theme-original/SchemaItem";
import type { Props } from "@theme/SchemaItem";

type Schema = Record<string, any> | undefined;

const code = (value: unknown) => `\`${value}\``;

const enumOf = (schema: Schema): unknown[] | undefined => {
  if (!schema) return undefined;
  if (Array.isArray(schema.enum)) return schema.enum;
  if (Array.isArray(schema.allOf)) {
    const member = schema.allOf.find((item: Schema) => Array.isArray(item?.enum));
    return member?.enum;
  }
  return undefined;
};

const lengthRule = (schema: Record<string, any>) => {
  const { minLength, maxLength } = schema;
  if (minLength == null && maxLength == null) return undefined;
  if (minLength != null && maxLength != null) {
    return minLength === maxLength ? `Exactly ${maxLength} characters` : `${minLength} to ${maxLength} characters`;
  }
  if (minLength != null) return minLength === 1 ? "Not empty" : `At least ${minLength} characters`;
  return `Up to ${maxLength} characters`;
};

const rangeRule = (schema: Record<string, any>) => {
  const lower =
    typeof schema.exclusiveMinimum === "number"
      ? `Greater than ${schema.exclusiveMinimum}`
      : schema.minimum != null
        ? schema.exclusiveMinimum === true
          ? `Greater than ${schema.minimum}`
          : `Minimum ${schema.minimum}`
        : undefined;
  const upper =
    typeof schema.exclusiveMaximum === "number"
      ? `Less than ${schema.exclusiveMaximum}`
      : schema.maximum != null
        ? schema.exclusiveMaximum === true
          ? `Less than ${schema.maximum}`
          : `Maximum ${schema.maximum}`
        : undefined;
  if (lower && upper) {
    const inclusive = !schema.exclusiveMinimum && !schema.exclusiveMaximum;
    if (inclusive) return `${schema.minimum} to ${schema.maximum}`;
    return `${lower}, ${upper.replace(/^Maximum/, "up to").replace(/^Less/, "less")}`;
  }
  return lower ?? upper;
};

const itemsRule = (schema: Record<string, any>) => {
  const { minItems, maxItems } = schema;
  if (minItems == null && maxItems == null) return undefined;
  if (minItems != null && maxItems != null) return `${minItems} to ${maxItems} items`;
  if (minItems != null) return `At least ${minItems} items`;
  return `Up to ${maxItems} items`;
};

export const plainQualifierMessage = (schema: Schema): string | undefined => {
  if (!schema) return undefined;
  if (schema.items && schema.minItems == null && schema.maxItems == null) {
    return plainQualifierMessage(schema.items);
  }

  const rules: string[] = [];
  const values = enumOf(schema) ?? enumOf(schema.items) ?? (schema.mapping ? Object.keys(schema.mapping) : undefined);
  if (values?.length) rules.push(`One of ${values.map(code).join(", ")}`);

  const length = lengthRule(schema);
  if (length) rules.push(length);

  const range = rangeRule(schema);
  if (range) rules.push(range);

  const formatExplainsPattern = ["date", "date-time", "time", "uuid", "email", "uri"].includes(schema.format);
  if (schema.pattern && !formatExplainsPattern) rules.push(`Pattern ${code(schema.pattern)}`);

  const items = itemsRule(schema);
  if (items) rules.push(items);

  return rules.length ? rules.join(". ") : undefined;
};

export default function SchemaItem(props: Props) {
  const qualifierMessage = props.qualifierMessage ?? plainQualifierMessage(props.schema as Schema);
  return <OriginalSchemaItem {...props} qualifierMessage={qualifierMessage} />;
}

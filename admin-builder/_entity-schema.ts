import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { ConfigContainer, DBClientContainer } from './_container';
import { mergeContainers } from 'tiny-invert';

export const EntitySchemaProvider = mergeContainers([
  ConfigContainer,
  DBClientContainer,
]).provider((ctx) => {
  const fields = Object.fromEntries(
    ctx.deps.config.fields.map((field) => {
      return [field.name, text(field.name)];
    })
  );

  const EntitySchema = pgTable(ctx.deps.config.name, {
    id: serial('id'),
    ...fields,
    name: text('name'),
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
  });

  return EntitySchema;
});

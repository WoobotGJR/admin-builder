import { drizzle } from 'drizzle-orm/postgres-js';
import { ConfigContainer, DBClientContainer } from './_container';
import { EntitySchemaProvider } from './_entity-schema';
import { mergeContainers } from 'tiny-invert';

export const DBProvider = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]).provider(
  (ctx) => {
    const db = drizzle(ctx.deps.dbClient, {
      schema: {
        entitySchema: ctx.innerDeps.EntitySchema,
      },
    });

    return db;
  },
  {
    EntitySchema: EntitySchemaProvider,
  }
);

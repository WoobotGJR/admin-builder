import { createModule } from 'tiny-invert';
import type { AdminBuilderField, AdminEntityConfig } from './_types';
import { EntitySchemaProvider } from './_entity-schema';
import { AdminDBEntityBuilderContainer } from './_container';
import { DBProvider } from './_db';

export type { AdminBuilderField, AdminEntityConfig };

const EntryProvider = AdminDBEntityBuilderContainer.provider(
  (ctx) => ({
    EntityPage: ctx.innerDeps.EntityPage,
  }),
  {
    EntityPage: DBProvider,
  }
);

export const EntitySchemaBuilder = createModule(EntitySchemaProvider);

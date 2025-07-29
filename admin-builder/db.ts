import { createModule } from 'tiny-invert';
import type { AdminBuilderField, AdminEntityConfig } from './_types';
import { EntitySchemaProvider } from './_entity-schema';
import { AdminDBEntityBuilderContainer } from './_container';

export type { AdminBuilderField, AdminEntityConfig };

const DbProvider = AdminDBEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntitySchemaProvider,
  }
);

export const EntityDbBuilder = createModule(DbProvider);

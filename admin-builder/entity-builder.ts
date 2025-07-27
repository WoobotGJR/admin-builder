import { createModule } from 'tiny-invert';
import { AdminEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity-page';
import type { AdminBuilderField, AdminEntityConfig } from './_types';

export type { AdminBuilderField, AdminEntityConfig };

const EntryProvider = AdminEntityBuilderContainer.provider(
  (ctx) => ({
    EntityPage: ctx.innerDeps.EntityPage,
  }),
  {
    EntityPage: EntityPageProvider,
  }
);

export const EntityBuilder = createModule(EntryProvider);

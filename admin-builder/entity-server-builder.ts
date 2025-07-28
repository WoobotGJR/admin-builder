import { createModule } from 'tiny-invert';
import { AdminServerEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity-page';
import type { AdminBuilderField, AdminEntityConfig } from './_types';

export type { AdminBuilderField, AdminEntityConfig };

const EntryProvider = AdminServerEntityBuilderContainer.provider(
  (ctx) => ({
    EntityPage: ctx.innerDeps.EntityPage,
  }),
  {
    EntityPage: EntityPageProvider,
  }
);

export const EntityServerBuilder = createModule(EntryProvider);

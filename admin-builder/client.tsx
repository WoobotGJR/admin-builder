import { createModule } from 'tiny-invert';
import type { AdminBuilderField, AdminEntityConfig } from './_types';
import { AdminClientEntityBuilderContainer } from './_container';
import { EntityPageProvider } from './_entity-page';

export type { AdminBuilderField, AdminEntityConfig };

const ClientProvider = AdminClientEntityBuilderContainer.provider(
  (ctx) => ctx.innerDeps,
  {
    EntityPage: EntityPageProvider,
  }
);

export const EntityClientBuilder = createModule(ClientProvider);

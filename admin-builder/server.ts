import { createModule } from 'tiny-invert';
import { AdminServerEntityBuilderContainer } from './_container';
import type { AdminBuilderField, AdminEntityConfig } from './_types';

export type { AdminBuilderField, AdminEntityConfig };

const ServerProvider = AdminServerEntityBuilderContainer.provider((ctx) => ({
  EntityPage: ctx.innerDeps,
}));

export const EntityServerBuilder = createModule(ServerProvider);

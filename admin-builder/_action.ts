import { createModule } from 'tiny-invert';
import type {
  ActionParams,
  AdminBuilderAction,
  AdminBuilderField,
  AdminEntityConfig,
  GetEntityResult,
} from './_types';
import { AdminActionEntityBuilderContainer } from './_container';
import { DBProvider } from './_db';
import { EntitySchemaProvider } from './_entity-schema';
import { eq } from 'drizzle-orm';

export type { AdminBuilderField, AdminEntityConfig };

export const ActionProvider = AdminActionEntityBuilderContainer.provider(
  ({ innerDeps: { db, entitySchema } }): AdminBuilderAction =>
    async (params: ActionParams): Promise<GetEntityResult[] | null> => {
      if (params.type === 'get') {
        return await db.query.entitySchema.findMany();
      }

      if (params.type === 'create') {
        await db.insert(entitySchema).values({
          ...params.data,
        });
        return null;
      }

      if (params.type === 'update') {
        await db
          .update(entitySchema)
          .set({ ...params.data })
          .where(eq(entitySchema.id, params.id));
        return null;
      }

      if (params.type === 'delete') {
        await db.delete(entitySchema).where(eq(entitySchema.id, params.id));
        return null;
      }

      return null;
    },
  {
    db: DBProvider,
    entitySchema: EntitySchemaProvider,
  }
);

export const EntityActionBuilder = createModule(ActionProvider);

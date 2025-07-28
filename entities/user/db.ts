import { dbClient } from '@/lib/shared/db-client';
import { entityCfg } from './config';
import { EntitySchemaBuilder } from '@/admin-builder/entity-db-builder';

export const UserEntitySchema = EntitySchemaBuilder.init({
  config: entityCfg,
  dbClient,
});

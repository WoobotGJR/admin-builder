import { EntityServerBuilder } from '@/admin-builder/server';
import { entityCfg } from './config';
import { dbClient } from '@/lib/shared/db-client';

export const UserServerEntity = EntityServerBuilder.init({
  config: entityCfg,
  dbClient,
});

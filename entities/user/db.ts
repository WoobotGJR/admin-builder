import { dbClient } from '@/lib/shared/db-client';
import { entityCfg } from './config';
import { EntityDbBuilder } from '@/admin-builder/db';

export const userDBEntity = EntityDbBuilder.init({
  config: entityCfg,
  dbClient,
});

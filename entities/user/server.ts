import { EntityServerBuilder } from '@/admin-builder/entity-server-builder';
import { entityCfg } from './config';
import { dbClient } from '@/lib/shared/db-client';
import { userAction } from './action';
import { userClient } from './client';

export const UserEntity = EntityServerBuilder.init({
  config: entityCfg,
  dbClient,
  action: userAction,
  client: userClient,
});

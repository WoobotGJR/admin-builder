'use server';

import { EntityActionBuilder } from '@/admin-builder/_action';
import { entityCfg } from './config';
import { dbClient } from '@/lib/shared/db-client';

export const userAction = EntityActionBuilder.init({
  dbClient,
  config: entityCfg,
});

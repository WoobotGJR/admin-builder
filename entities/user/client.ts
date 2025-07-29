'use client';

import { EntityClientBuilder } from '@/admin-builder/client';
import { entityCfg } from './config';
import { userAction } from './action';

export const userClient = EntityClientBuilder.init({
  config: entityCfg,
  action: userAction,
});

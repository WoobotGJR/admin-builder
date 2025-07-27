import { AdminEntityConfig } from '@/admin-builder/_types';
import { EntityBuilder } from '@/admin-builder/entity-builder';

const entityCfg: AdminEntityConfig = {
  name: 'user',
  title: 'Users',
  fields: [
    {
      type: 'text',
      name: 'name',
      title: 'Name',
    },
    {
      type: 'field',
      name: 'role',
      title: 'Role',
      options: [
        {
          label: 'admin',
          value: 'Admin',
        },
        {
          label: 'user',
          value: 'User',
        },
      ],
    },
  ],
};

export const UserEntity = EntityBuilder.init({
  config: entityCfg,
});

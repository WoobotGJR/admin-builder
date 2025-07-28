import { AdminEntityConfig } from '@/admin-builder/_types';

export const entityCfg: AdminEntityConfig = {
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

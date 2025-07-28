import { createContainer, mergeContainers } from 'tiny-invert';
import { AdminEntityConfig } from './_types';
import { Sql } from 'postgres';

export const DBClientContainer = createContainer<{
  dbClient: Sql;
}>();

export const ConfigContainer = createContainer<{
  config: AdminEntityConfig;
}>();

export const AdminDBEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

export const AdminServerEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

export const AdminActionEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

export const AdminClientEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

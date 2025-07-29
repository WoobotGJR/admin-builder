import { createContainer, mergeContainers } from 'tiny-invert';
import { AdminBuilderAction, AdminEntityConfig } from './_types';
import { Sql } from 'postgres';

// Utility containers
export const DBClientContainer = createContainer<{
  dbClient: Sql;
}>();

export const ConfigContainer = createContainer<{
  config: AdminEntityConfig;
}>();

// Entry containers
export const AdminDBEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

export const AdminServerEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]).extend('AdminServerEntityBuilderContainer');

export const AdminActionEntityBuilderContainer = mergeContainers([
  DBClientContainer,
  ConfigContainer,
]);

export const AdminClientEntityBuilderContainer = mergeContainers([
  ConfigContainer,
]).extend<{
  action: AdminBuilderAction;
}>('AdminClientEntityBuilderContainer');

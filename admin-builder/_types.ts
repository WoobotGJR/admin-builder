type Options = {
  label: string;
  value: string;
};

type FieldCommon = {
  name: string;
  title: string;
};

export type TextField = {
  type: 'text';
} & FieldCommon;

export type SelectField = {
  type: 'select';
  options: Options[];
} & FieldCommon;

export type AdminBuilderField = TextField | SelectField;

export type GetEntitiesParams = {
  type: 'get';
};

export type CreateEntitiesParams = {
  type: 'create';
  data: {
    [key: string]: string | number | boolean | Date | null;
  };
};

export type UpdateEntitiesParams = {
  type: 'update';
  id: number;
  data: {
    [key: string]: string | number | boolean | Date | null;
  };
};

export type DeleteEntitiesParams = {
  type: 'delete';
  id: number;
};

export type GetEntityResult = {
  id: number;
  [key: string]: string | number | boolean | Date | null;
};

export type ActionParams =
  | GetEntitiesParams
  | CreateEntitiesParams
  | UpdateEntitiesParams
  | DeleteEntitiesParams;

export type AdminBuilderAction = (
  params: ActionParams
) => Promise<GetEntityResult[] | null>;

export type AdminEntityConfig = {
  name: string;
  title: string;
  fields: AdminBuilderField[];
};

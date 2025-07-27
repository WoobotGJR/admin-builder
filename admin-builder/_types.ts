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
  type: 'field';
  options: Options[];
} & FieldCommon;

export type AdminBuilderField = TextField | SelectField;

export type AdminEntityConfig = {
  name: string;
  title: string;
  fields: AdminBuilderField[];
};

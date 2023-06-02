export const actionTypes = {
  load: "books@load",
  delete: "books@delete",
  create: "books@create",
  update: "books@update",
  selectBook: "books@selectBook",
  unSelectBook: "books@unSelectBook",
} as const;

export enum actionTypesE {
  load = "books@load",
  delete = "books@delete",
  create = "books@create",
  update = "books@update",
}

export enum actionTypesEnumNumeric {
  load,
  delete,
  create,
  update,
}

import { schema } from "normalizr";

// eslint-disable-next-line
export const bookSchema = new schema.Entity(
  "books",
  {},
  { idAttribute: "_id" }
);

import { schema } from "normalizr";

export const entity = new schema.Entity("cards");
export const array = { cards: [entity] };

import type { IItem } from "./layouts/EnterItems/item";

export const isQueryValid = (query: any) => {
  if (!query || query.trim().length === 0) return false;
  return true;
};

export const filterItemsByQuery = (
  items: IItem[],
  query: string | undefined
) => {
  if (!isQueryValid(query)) return items;
  return items.filter((item) =>
    item.title.toLowerCase().includes(query!.trim().toLowerCase())
  );
};

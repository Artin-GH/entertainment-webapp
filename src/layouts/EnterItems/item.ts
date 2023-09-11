export interface IItem {
  title: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
  year: number;
  category: "Movie" | "TV Series";
  rating: "PG" | "E" | "18+";
  isBookmarked: boolean;
  isTrending: boolean;
  id: number;
}

export const bookmarkItem = async (
  item: IItem,
  shouldBeBookmarked: boolean
) => {
  "use client";
  await fetch(`${window.origin}/api/items/item`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ id: item.id, isBookmarked: shouldBeBookmarked }),
  });
};

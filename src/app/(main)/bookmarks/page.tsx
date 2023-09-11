import SearchBar from "@/components/SearchBar";
import EnterItems from "@/layouts/EnterItems";
import { getJsonData } from "@/jsonData";
import { IItem } from "@/layouts/EnterItems/item";
import { filterItemsByQuery } from "@/helpers";

export default async function BookmarksPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  let items: IItem[] = ((await getJsonData()) as IItem[]).filter(
    (item) => item.isBookmarked
  );
  items = filterItemsByQuery(items, query);
  const movies = items.filter((items) => items.category === "Movie");
  const tvSeries = items.filter((items) => items.category === "TV Series");

  return (
    <>
      <SearchBar placeHolder="Search for bookmarked shows" />
      <h1 className="heading-lg">{query ? "Found " : ""}Bookmarked Movies</h1>
      <EnterItems items={movies} delNotBookmarks={true} />
      <h1 className="heading-lg">
        {query ? "Found " : ""}Bookmarked TV Series
      </h1>
      <EnterItems items={tvSeries} delNotBookmarks={true} />
    </>
  );
}

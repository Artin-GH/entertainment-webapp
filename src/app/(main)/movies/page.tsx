import SearchBar from "@/components/SearchBar";
import EnterItems from "@/layouts/EnterItems";
import { getJsonData } from "@/jsonData";
import { IItem } from "@/layouts/EnterItems/item";
import { filterItemsByQuery } from "@/helpers";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  const movies: IItem[] = filterItemsByQuery(
    ((await getJsonData()) as IItem[]).filter(
      (item) => item.category === "Movie"
    ),
    query
  );

  return (
    <>
      <SearchBar placeHolder="Search for movies" />
      <h1 className="heading-lg">{query ? "Found Movies" : "Movies"}</h1>
      <EnterItems items={movies} />
    </>
  );
}

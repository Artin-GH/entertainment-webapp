import SearchBar from "@/components/SearchBar";
import EnterItems from "@/layouts/EnterItems";
import { getJsonData } from "@/jsonData";
import { IItem } from "@/layouts/EnterItems/item";
import { filterItemsByQuery } from "@/helpers";

export default async function TvSeriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  let tvSeries: IItem[] = ((await getJsonData()) as IItem[]).filter(
    (item) => item.category === "TV Series"
  );
  tvSeries = filterItemsByQuery(tvSeries, query);

  return (
    <>
      <SearchBar placeHolder="Search for TV series" />
      <h1 className="heading-lg">{query ? "Found TV Series" : "TV Series"}</h1>
      <EnterItems items={tvSeries} />
    </>
  );
}

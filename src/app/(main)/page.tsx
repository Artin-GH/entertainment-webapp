import SearchBar from "@/components/SearchBar";
import EnterItems from "@/layouts/EnterItems";
import { getJsonData } from "@/jsonData";
import { IItem } from "@/layouts/EnterItems/item";
import { filterItemsByQuery } from "@/helpers";
import TrendingItem from "./TrendingItem";
import styles from './styles/Index.module.css';

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  const items = filterItemsByQuery((await getJsonData()) as IItem[], query);
  const trendingItems = items.filter((item) => item.isTrending);

  return (
    <>
      <SearchBar placeHolder="Search for movies or TV series" />
      {query ? null : (
        <>
          <h1 className="heading-lg">Trending</h1>
          <div className={styles.trending}>
            {trendingItems.map((item, i) => (
              <TrendingItem {...item} key={i} />
            ))}
          </div>
        </>
      )}
      <h1 className="heading-lg">
        {query ? "Found Items" : "Recommended for you"}
      </h1>
      <EnterItems items={items} />
    </>
  );
}

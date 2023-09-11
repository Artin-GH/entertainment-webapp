"use client";
import BookmarkCircle from "@/components/BookmarkCircle";
import EnterOverlay from "@/components/EnterOverlay";
import Image from "next/image";
import OvalSvg from "public/oval.svg";
import MovieIcon from "public/icon-nav-movies.svg";
import TvSeriesIcon from "public/icon-nav-tv-series.svg";
import styles from "./EnterItems.module.css";
import { IItem, bookmarkItem } from "./item";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { bookmark } from "@/redux/features/itemsSlice";

export const EnterItem: React.FC<{
  item: IItem;
  delNotBookmarks?: boolean;
}> = ({ item, delNotBookmarks }) => {
  const isBookmarked = useAppSelector(
    (state) => state.items[item.id]?.isBookmarked ?? item.isBookmarked
  );
  const dispatch = useAppDispatch();
  if (delNotBookmarks && !isBookmarked) return null;

  const handleBookmarkClick = async () => {
    const newIsBookmarked = !isBookmarked;
    dispatch(bookmark([item.id, newIsBookmarked]));
    await bookmarkItem(item, newIsBookmarked);
  };

  return (
    <div className={styles.item}>
      <figure className={styles.itemFigure}>
        <Image src={item.thumbnail.regular.large} alt="item" fill />
        <EnterOverlay className={styles.itemFigureOverlay} />
        <BookmarkCircle
          className={styles.itemFigureBookmarkCircle}
          onClick={handleBookmarkClick}
          isBookmarked={isBookmarked}
        />
      </figure>
      <div className={`body-sm ${styles.itemTags}`}>
        <span>{item.year}</span>
        <span className={styles.itemTagsDot}>
          <OvalSvg />
        </span>
        <span className={styles.itemTagsIcon}>
          {item.category === "Movie" ? <MovieIcon /> : <TvSeriesIcon />}
        </span>
        <span>{item.category}</span>
        <span className={`${styles.itemTagsDot} ${styles.itemTagsRating}`}>
          <OvalSvg />
        </span>
        <span className={styles.itemTagsRating}>{item.rating}</span>
      </div>
      <h1 className="heading-xs">{item.title}</h1>
    </div>
  );
};

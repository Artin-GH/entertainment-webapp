"use client";
import { IItem, bookmarkItem } from "@/layouts/EnterItems/item";
import Image from "next/image";
import OvalSvg from "public/oval.svg";
import MovieIcon from "public/icon-nav-movies.svg";
import TvSeriesIcon from "public/icon-nav-tv-series.svg";
import BookmarkCircle from "@/components/BookmarkCircle";
import EnterOverlay from "@/components/EnterOverlay";
import styles from "./styles/Index.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { bookmark } from "@/redux/features/itemsSlice";

export default function TrendingItem(props: IItem) {
  const isBookmarked = useAppSelector(
    (state) => state.items[props.id]?.isBookmarked ?? props.isBookmarked
  );
  const dispatch = useAppDispatch();

  return (
    <div className={styles.trendingItem}>
      <Image src={props.thumbnail.trending!.large} alt="thumbnail" fill />
      <EnterOverlay className={styles.trendingItemOverlay} />
      <div className={styles.trendingItemTop}>
        <BookmarkCircle
          className={styles.trendingItemTopCircle}
          isBookmarked={isBookmarked}
          onClick={async () => {
            const newIsBookmarked = !isBookmarked;
            dispatch(bookmark([props.id, newIsBookmarked]));
            await bookmarkItem(props, newIsBookmarked);
          }}
        />
      </div>
      <div className={styles.trendingItemBottom}>
        <div>
          <div className={`body-md ${styles.trendingItemBottomTags}`}>
            <span>{props.year}</span>
            <span className={styles.trendingItemBottomDot}>
              <OvalSvg />
            </span>
            <span className={styles.trendingItemBottomIcon}>
              {props.category == "Movie" ? <MovieIcon /> : <TvSeriesIcon />}
            </span>
            <span>{props.category}</span>
            <span
              className={`${styles.trendingItemBottomDot} ${styles.trendingItemBottomRating}`}
            >
              <OvalSvg />
            </span>
            <span className={styles.trendingItemBottomRating}>
              {props.rating}
            </span>
          </div>
          <h2 className="heading-sm">{props.title}</h2>
        </div>
        <div className={styles.trendingItemBottomRatingMob}>{props.rating}</div>
      </div>
    </div>
  );
};

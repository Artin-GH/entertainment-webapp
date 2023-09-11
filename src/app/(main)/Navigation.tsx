"use client";
import Link from "next/link";
import styles from "./styles/Navigation.module.css";
import { useSelectedLayoutSegment } from "next/navigation";
import HomeIcon from "public/icon-nav-home.svg";
import MovieIcon from "public/icon-nav-movies.svg";
import TvSeriesIcon from "public/icon-nav-tv-series.svg";
import BookmarkIcon from "public/icon-nav-bookmark.svg";

const Navigation: React.FC = () => {
  const activeSegment = useSelectedLayoutSegment();
  const navLinks = [
    { Icon: HomeIcon, segment: null },
    { Icon: MovieIcon, segment: "movies" },
    { Icon: TvSeriesIcon, segment: "tv-series" },
    { Icon: BookmarkIcon, segment: "bookmarks" },
  ];

  return (
    <nav className={styles.navigation}>
      {navLinks.map((navLink, i) => (
        <Link
          key={i}
          href={`/${navLink.segment ?? ""}`}
          className={`${styles.navigationLink} ${
            navLink.segment === activeSegment ? "active" : ""
          }`}
        >
          <navLink.Icon />
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

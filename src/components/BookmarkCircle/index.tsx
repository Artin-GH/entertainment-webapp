import BookmarkIconEmpty from "public/icon-bookmark-empty.svg";
import BookmarkIconFull from "public/icon-bookmark-full.svg";
import styles from "./BookmarkCircle.module.css";
import React from "react";

const BookmarkCircle: React.FC<{
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isBookmarked?: boolean;
}> = ({ className, onClick, isBookmarked }) => {
  return (
    <button
      className={`${styles.circle}${className ? " " + className : ""}`}
      onClick={onClick}
    >
      <figure className={styles.figure}>
        {isBookmarked ? <BookmarkIconFull /> : <BookmarkIconEmpty />}
      </figure>
    </button>
  );
};

export default BookmarkCircle;

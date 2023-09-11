import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "public/icon-search.svg";
import { redirect } from "next/navigation";
import { isQueryValid } from "@/helpers";

const SearchBar: React.FC<{ pathName: string; placeHolder?: string }> = ({
  pathName,
  placeHolder,
}) => {
  const onSearch = async (formData: FormData) => {
    "use server";
    const query = formData.get("q");
    if (!isQueryValid(query)) redirect(pathName);
    redirect(`${pathName}?q=${query}`);
  };

  return (
    <form className={styles.searchBar} action={onSearch}>
      <button type="submit" className={styles.searchBarSubmit}>
        <SearchIcon />
      </button>
      <div className={styles.searchBarRight}>
        <input
          type="text"
          name="q"
          className={`${styles.searchBarInput} heading-md`}
          placeholder={placeHolder}
          maxLength={100}
        />
      </div>
    </form>
  );
};

export default SearchBar;

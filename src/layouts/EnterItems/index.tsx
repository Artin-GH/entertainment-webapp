"use client";
import React, { useEffect } from "react";
import styles from "./EnterItems.module.css";
import { IItem } from "./item";
import { EnterItem } from "./EnterItem";
import { useRouter } from "next/navigation";

const EnterItems: React.FC<{ items: IItem[]; delNotBookmarks?: boolean }> = ({
  items,
  delNotBookmarks,
}) => {
  const router = useRouter();
  useEffect(() => {
    if (delNotBookmarks) {
      router.refresh();
    }
  }, []);
  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <EnterItem item={item} delNotBookmarks={delNotBookmarks} key={i} />
      ))}
    </div>
  );
};

export default EnterItems;

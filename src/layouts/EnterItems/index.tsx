import React from "react";
import styles from "./EnterItems.module.css";
import { IItem } from "./item";
import { EnterItem } from "./EnterItem";

const EnterItems: React.FC<{ items: IItem[]; delNotBookmarks?: boolean }> = ({
  items,
  delNotBookmarks,
}) => {
  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <EnterItem item={item} delNotBookmarks={delNotBookmarks} key={i} />
      ))}
    </div>
  );
};

export default EnterItems;

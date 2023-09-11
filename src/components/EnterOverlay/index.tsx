import PlayIcon from "public/icon-play.svg";
import styles from './EnterOverlay.module.css';
import React from "react";

const EnterOverlay: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${styles.overlay}${className ? " " + className : ""}`}>
      <button className={styles.overlayBtn}>
        <PlayIcon className={styles.overlayIcon} />
        <span className="heading-xs">Play</span>
      </button>
    </div>
  );
};

export default EnterOverlay

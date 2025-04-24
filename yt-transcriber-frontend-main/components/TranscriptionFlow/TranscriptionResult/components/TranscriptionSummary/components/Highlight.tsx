import React, { useState } from "react";
import styles from "./Highlight.module.scss";

const Highlight = ({ keyword, description }: { keyword: string, description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span
      className={styles.highlight}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {keyword}
      {isHovered && (
        <div className={styles.popup}>
          <div className={styles.popup_arrow}></div>
          <p>{description}</p>
        </div>
      )}
    </span>
  );
};

export default Highlight;
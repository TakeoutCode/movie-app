import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

export const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (search.length >= 2) {
      navigate(`search/movies/${search}`);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Vengadores"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search_input}
      />
      <button className={styles.search_button} onClick={handleClick}>
        <FcSearch className={styles.search_icon} />
      </button>
    </div>
  );
};

import React from "react";
import styles from "./SearchBar.module.css";

const SearchBarr = ({ searchQuery, handleSearchChange }) => (
  <form className={styles.searchBar}>
    <label htmlFor="searchInput" className={styles.visuallyHidden}>
      Search
    </label>
    <input
      type="text"
      id="searchInput"
      className={styles.searchInput}
      placeholder="Search"
      aria-label="Search"
      value={searchQuery}
      onChange={handleSearchChange}
    />
    <button type="submit" className={styles.searchButton} disabled >
      Search
    </button>
  </form>
);

function Header({ searchQuery, handleSearchChange }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/01504b5789272d8564fcd10f4503f2c636fe83836297b7ab13bcbe61e154aa78?apiKey=65c3b0a390fd4311b72fcd91fc18e875&"
          alt="Company Logo"
          className={styles.logo}
        />
        <SearchBarr
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </div>
    </header>
  );
}

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <>
      <Header
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
    </>
  );
};

export default SearchBar;

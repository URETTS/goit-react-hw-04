import styles from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
       if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
      <div className={styles.searchBar}>
          <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <button type="submit" className={styles.searchButton}>
          <CiSearch size={20} />
        </button>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};

export default SearchBar;

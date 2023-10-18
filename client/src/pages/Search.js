
import React, { useState } from "react";
import "../components/AlbumDetails/search.css"
import AlbumDetails from "../components/AlbumDetails/AlbumDetails";
const key = "523532";


export default function Search() {
  const [searchForm, setSearchForm] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({});

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const searchData = await fetch(
        `https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${searchForm}`
      );
      const searchResultsJSON = await searchData.json();
      console.log("searchResults");
      console.log(searchResultsJSON);
      setSearchResults(searchResultsJSON);
      setLoading(false);
    } catch (e) {
      console.error("Error in search handler");
      console.error(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input className="search"
          onChange={(e) => setSearchForm(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <AlbumDetails searchResults={searchResults} />
        )}
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import AlbumDetails from "../components/AlbumDetails/AlbumDetails";
const key = "523532";

export default function Search() {
  const [searchForm, setSearchForm] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({});
  const headingStyle = {
    fontFamily: "Satisfy, cursive",
    color: "#c5f7ff",
  };
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
        <input
          onChange={(e) => setSearchForm(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search"
        />
        <Button icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>{" "}
      </form>
      <div className="container">
        {isLoading ? (
          <h1 style={headingStyle}>Loading...</h1>
        ) : (
          <AlbumDetails searchResults={searchResults} />
        )}
      </div>
    </>
  );
}

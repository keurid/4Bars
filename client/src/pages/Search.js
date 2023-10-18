import React, { useState } from "react";
import "../components/AlbumDetails/search.css";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            className="search"
            onChange={(e) => setSearchForm(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search"
          />
          <div style={{ marginLeft: "10px" }}>
            <Button
              icon={<SearchOutlined />}
              onClick={handleSearch}
              style={{
                border: "1px solid rgba(252, 252, 252, 0.4)",
                backgroundColor: "rgba(252, 252, 252, 0.2)",
                height: "43px",
                fontFamily: "Alata, sans-serif",

                fontSize: "15px",
                color: "white",
              }}
            >
              Search
            </Button>{" "}
          </div>
        </form>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        {isLoading ? (
          <h1 style={headingStyle}>Please enter an artist name!</h1>
        ) : (
          <AlbumDetails searchResults={searchResults} />
        )}
      </div>
    </>
  );
}

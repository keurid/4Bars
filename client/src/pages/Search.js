import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlbumDetails from "../components/AlbumDetails/AlbumDetails";
const key = "523532";

export default function Search() {
  const [search, setSearch] = useState("");
  
  // const navigate = useNavigate();
  let searchResults = {};
  // const handleLocalStorage = (id, artistId) => {
  //   localStorage.setItem("selectedAlbum", id);
  //   localStorage.setItem("selectedArtist", artistId);
  //   navigate("/album");
  // };

  const handleSearch = async () => {
    // console.log(search);
    // fetch(
    //   `https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${search}`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAlbums(data.album);
    //   })
    //   .catch((err) => console.log(err));

    const searchData = await fetch(
      `https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${search}`
    );
    searchResults = searchData.json();
    console.log("searchResults");
    console.log(searchResults);
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
          placeholder="Search"
        />
        <button onClick={handleSearch}>Submit</button>
      </div>
      <AlbumDetails searchResults={searchResults} />
    </div>
  );
}

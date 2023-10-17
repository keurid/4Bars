import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const key = "523532";

export default function Search() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  const handleLocalStorage = (id, artistId) => {
    localStorage.setItem("selectedAlbum", id);
    localStorage.setItem("selectedArtist", artistId);
    navigate("/album");
  };

  const handleSearch = () => {
    console.log(search);
    fetch(`https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlbums(data.album);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search"
      />
      <button onClick={handleSearch}>Submit</button>
      <div>
        {albums.map((album, index) => (
          <div key={index}>
            <p onClick={() => handleLocalStorage(album.idAlbum, album.idArtist)}>
              {album.strAlbum}
            </p>
            <p>{album.idArtist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import './albumDetails.css';

const mockAlbumData = [
  { idAlbum: "stuff", idArtist: "stuff again" },
  { idAlbum: "stuff and back again", idArtist: "srake" },
  { idAlbum: "joe", idArtist: "mama" }
];

const AlbumDetails = (props) => {
  console.log("AlbumDetails Component");
  console.log(props.searchResults.album);
  const albumData = props.searchResults.album;

  return (
    <>
      
      
      {albumData.map((album, index) => (
        <div className="gridContainer" key={index}>
          <ul className="gridItem">
            {/* onClick={() => handleLocalStorage(album.idAlbum, album.idArtist)} */}
            <img className="albumImg" src={album.strAlbumThumb} alt={album.strAlbum} />

            {/* <p>{album.idArtist}{album.idAlbum}{album.strAlbum}</p> */}
          </ul>
        </div>
      ))}
    </>
  );
};

export default AlbumDetails;
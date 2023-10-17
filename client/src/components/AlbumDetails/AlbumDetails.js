import React, { useEffect, useState } from "react";

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
        <div key={index}>
          <ul>
            {/* onClick={() => handleLocalStorage(album.idAlbum, album.idArtist)} */}
            <img src={album.strAlbumThumb} alt={album.strAlbum} />
            <p>{album.idAlbum}</p>
            <p>{album.strAlbum}</p>
            <p>{album.idArtist}</p>
          </ul>
        </div>
      ))}
    </>
  );
};

export default AlbumDetails;
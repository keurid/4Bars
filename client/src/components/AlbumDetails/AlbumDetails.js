import React, { useEffect, useState } from "react";

const key = "523532";
const mockAlbumData = [{idAlbum: "stuff",idArtist:"stuff again"},{idAlbum: "stuff and back again",idArtist:"srake"},{idAlbum: "joe",idArtist:"mama"}]
const AlbumDetails = (props) => {
  console.log("AlbumDetails Component")
  console.log(props)
  return(
    <>
    
    {mockAlbumData.map((album,index) => {
      <div key ={index}>
        <h1>{album.idAlbum}</h1>
        <h2>{album.idArtist}</h2>
        </div>
    })
          // props.map((album, index) => (
    //       <div key={index}>
    //         <ul
    //           // onClick={() => handleLocalStorage(album.idAlbum, album.idArtist)}
    //         >
    //           <img src={album.strAlbumThumb}></img>
    //           <p>{album.strAlbum}</p>
    //         </ul>
    //         <p>{album.idArtist}</p>
    //       </div>
    //     ))
        }
    </>
  )
 
};

export default AlbumDetails;
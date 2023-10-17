// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const key = "523532";

// export default function DisplayTracks() {
//   const [topTracks, setTopTracks] = useState([]);
//   const navigate = useNavigate();

//   const handleLocalStorage = (id, artistId) => {
//     localStorage.setItem("selectedTrack", id);
//     navigate("/track");
//   };

//   const handleSearch = () => {
//     console.log(search);
//     fetch(`https://www.theaudiodb.com/api/v1/json/${key}/mostloved.php?format=track`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setAlbums(data.album);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
  

//       <div>
//         {albums.map((album, index) => (
//           <div key={index}>
//             <ul  onClick={() => handleLocalStorage(album.idAlbum, album.idArtist)}>
//             <img src={album.strAlbumThumb}></img>
//             <p>{album.strAlbum}</p>
//             </ul>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

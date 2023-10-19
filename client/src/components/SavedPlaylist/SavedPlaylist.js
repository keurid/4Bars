import React from 'react';
// import { QUERY_PLAYLIST } from '../../utils/queries';

const SavedPlaylist = ({
  playlists,
  // name,
  // description,
  // songs,
}) => {
  // if (!playlists.length){
  //   return <h3> No playlist yet!</h3>
  // }

  return (
    <div>
      {/* {<h3>{name}</h3>} */}
      {playlists &&
      playlists.map((playlist,index) => (
        <div key={playlist._id}>
        {/* // <div key={index}> */}
          <div>
            <p>{playlist.name}</p>
            <p>{playlist.songs[0]}</p>
            <p>{playlist.description}</p>
          </div>
        </div>
    ))}
    </div>
  );
};

export default SavedPlaylist;
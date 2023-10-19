import React from 'react';
import { QUERY_PLAYLIST } from '../../utils/queries';

const SavedPlaylist = ({
  playlist,
  name,
  description,
  songs,
}) => {
  if (!playlist.length){
    return <h3> No playlist yet!</h3>
  }

  return (
    <div>
      {playlist.map(playlist =>
        <div>
          <h1>{playlist.name}</h1>
          <h2>{playlist.description}</h2>
        </div>
        )}
    </div>
  );
};

export default SavedPlaylist;
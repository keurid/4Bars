import React, { useState } from 'react';
import PlaylistForm from '../components/PlaylistForm/PlaylistForm';

const Playlist = () => {
  const [createdPlaylist, setCreatedPlaylist] = useState(null);

  const handleCreatePlaylist = async (playlistData) => {
    try {
      const response = await fetch('CHANGETHISCODE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation CreatePlaylist($name: String!) {
              createPlaylist(newPlaylist: { name: $name }) {
                _id
                name
              }
            }
          `,
          variables: {
            name: playlistData.name,
          },
        }),
      });

      const result = await response.json();

      const newPlaylist = result.data.createPlaylist;

      setCreatedPlaylist(newPlaylist);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  return (
    <div>
      <h1>Create a Playlist</h1>
      <PlaylistForm onCreatePlaylist={handleCreatePlaylist} />

      {createdPlaylist && (
        <div>
          <h2>Playlist Created!</h2>
          <p>Name: {createdPlaylist.name}</p>
        </div>
      )}
    </div>
  );
};

export default Playlist;

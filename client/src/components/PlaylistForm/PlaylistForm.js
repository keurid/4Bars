import React, { useState } from 'react';

const PlaylistForm = ({ onCreatePlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreatePlaylist({ name: playlistName });

    setPlaylistName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Playlist Name:
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </label>
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default PlaylistForm;
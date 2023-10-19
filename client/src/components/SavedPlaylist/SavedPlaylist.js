import React, { useState, useEffect } from 'react';
import { QUERY_PLAYLIST } from '../../utils/queries';

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('user/playlists');
        const data = await response.json();

        setPlaylists(data.playlists);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistList;
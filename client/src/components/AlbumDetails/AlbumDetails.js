import React, { useEffect, useState } from "react";

const key = "523532";

const AlbumDetails = () => {
  const [albumDetails, setAlbumDetails] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const album = localStorage.getItem("selectedAlbum");
        const artist = localStorage.getItem("selectedArtist");

        const response = await fetch(
          `https://www.theaudiodb.com/api/v1/json/${key}/searchalbum.php?s=${artist}&a=${album}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch album details");
        }

        const data = await response.json();

        setAlbumDetails(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbumDetails();
  }, []);

  return (
    <main>
      <h1>ALBUM DETAILS</h1>
      {/* Render album details here */}
      {albumDetails && (
        <div>
          <p>Title: {albumDetails.title}</p>
          <p>Artist: {albumDetails.artist}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </main>
  );
};

export default AlbumDetails;
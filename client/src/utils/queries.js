import { gql } from "@apollo/client";

export const QUERY_PLAYLIST = gql`
query QueryPlaylist {
  User {
    playlist {
      _id
      description
      name
      songs {
        idAlbum
        idArtist
        idTrack
        strAlbum
        strArtist
        strTrack
      }
    }
  }
}`;
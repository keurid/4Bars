import { gql } from "@apollo/client";

export const QUERY_PLAYLIST = gql`
query QueryPlaylist {
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
}`;

export const QUERY_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      playlist {
        _id
        name
        description
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      playlist {
          _id
          name
          description
        }
      }
    }
`;
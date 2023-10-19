import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
mutation createUser ($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}`;

export const CREATE_PLAYLIST = gql`
mutation CreatePlaylist($name: String, $description: String, $songs: [ID]) {
  createPlaylist(name: $name, description: $description, songs: $songs) {
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


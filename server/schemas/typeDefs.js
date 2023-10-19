const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String!
    username: String!
    playlist: [Playlist]
  }

  type Playlist {
    _id: ID
    name: String
    description: String
    songs: [Song]
  }

  type Song {
    idAlbum: Int
    idArtist: Int
    idTrack: Int
    strAlbum: String
    strArtist: String
    strTrack: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    Users: [User]
    user(username: String!): User
    Playlist: [Playlist]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createPlaylist(name: String, description: String, songs: [ID]): Playlist
    deletePlaylist(playlist_id: String): Playlist
    saveSong(idAlbum: String, idArtist: String, idTrack: String, strAlbum: String, strTrack: String, strTrackThumb: String): Playlist
    deleteSong(idTrack: Int): Playlist
  }
`;

module.exports = typeDefs;

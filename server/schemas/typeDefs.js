const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    name: String!
    playlist: [playlist]
  }

  type Playlist {
    _id: ID!
    name: String!
    description: String!
    songs: [Song]
  }

  type Song {
    idAlbum: Int
    idArtist: Int!
    idTrack: Int!
    strAlbum: String
    strArtist: String
    strTrack: String
  }

  input newSong {
    idAlbum: Int
    idArtist: Int!
    idTrack: Int!
    strAlbum: String
    strArtist: String
    strTrack: String
  }

  type auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]
    playlist(_id: String): [playlist]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): auth
    login(email: String!, password: String!): auth
    saveSong(newSong: newSong):Playlist
    deleteSong(idTrack: Int):Playlist
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    name: String!
    playlist: [playlist]
  }

  type Playlist {
    _id: ID!
    playlist_id: String!
    owner: [String!]
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
    addPlaylist(playlist_id: String!): User
    removePlaylist(playlist_id: String!): User
  }
`;

module.exports = typeDefs;

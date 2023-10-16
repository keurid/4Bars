import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $username: String!
    $name: String!
    $password: String!
  ) {
    addUser(
      email: $email
      username: $username
      name: $name
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
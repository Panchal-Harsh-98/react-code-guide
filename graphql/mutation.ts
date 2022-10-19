import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation add_user(
    $username: String!
    $email: String!
    $phoneNumber: String!
  ) {
    insertUser(email: $email, username: $username, phone_number: $phoneNumber) {
      email
      username
      phone_number
      id
      created_at
    }
  }
`;

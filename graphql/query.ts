import { gql } from '@apollo/client';

export const GET_USER_LIST = gql`
  query MyQuery {
    getUserList {
      created_at
      email
      id
      phone_number
      username
    }
  }
`;

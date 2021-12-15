import { gql } from "@apollo/client";

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
    }
  }
`;

import { gql } from "@apollo/client"

// Query
// export const FETCH_BOARDS = gql`
//     query{
//         fetchBoards{
//             _id
//             writer
//             title
//             contents
//             createdAt

//         }
//     }
// `;

export const FETCH_BOARDS_OF_THE_BEST = gql`
query {
    fetchBoardsOfTheBest{
        _id
        writer
        title
        contents
        likeCount
        createdAt
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
        _id
        writer
        title
        contents
        createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
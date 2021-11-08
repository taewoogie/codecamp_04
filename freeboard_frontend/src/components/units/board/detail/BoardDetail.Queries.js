import { gql } from "graphql-tag"

export const FETCH_BOARD = gql`
query fetchBoard ( $boardId : ID! ) {
    fetchBoard ( boardId : $boardId ) {
        _id
        writer
        title
        contents
    }
}
`
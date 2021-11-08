import { gql } from '@apollo/client'

export const CRERATE_BOARD = gql`
    mutation createBoard( $writer : String , $title : String , $contents : String) {

             createBoard( writer : $writer, title :  $title, contents : $contents) {
                _id
                number
                message
            }
    }
`
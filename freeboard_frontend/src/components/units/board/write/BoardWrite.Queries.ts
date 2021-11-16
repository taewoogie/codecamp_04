import { gql } from '@apollo/client';

// 게시물 등록
export const CREATE_BOARD = gql`
    mutation createBoard( $createBoardInput : CreateBoardInput! ) {
        createBoard( createBoardInput : $createBoardInput ) {
            _id
            writer
            title
            contents
            youtubeUrl
            likeCount
            dislikeCount
            boardAddress{
                zipcode
                address
                addressDetail
            }
        }
    }
`;

//  게시물 수정
export const UPDATE_BOARD = gql`
    mutation updateBoard( $updateBoardInput : UpdateBoardInput! , $password : String , $boardId : ID! ) {
        updateBoard( updateBoardInput : $updateBoardInput , password : $password , boardId : $boardId) {
            _id
            writer
            title
            contents
            updatedAt
            boardAddress{
                zipcode
                address
                addressDetail
            }            
        }
    }
`;
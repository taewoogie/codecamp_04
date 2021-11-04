import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CRERATE_BOARD = gql`
    mutation createBoard( $writer : String , $title : String , $contents : String) {

             createBoard( writer : $writer, title :  $title, contents : $contents) {
                _id
                number
                message
            }
    }
`

export default function GraphqlMutationBoard2Page(){
    const [request , setRequest] = useState("");

    const [createBoard] = useMutation(CRERATE_BOARD)
    
    const Request = async () => {

        const result = await createBoard({
            variables : {
                writer    : "광영희",
                title     : "제목이요",
                constents : "내용"
            }
        });
        console.log(result);
        setRequest(result.data.createBoard.message)


    }

    return(
        <>
            <div>{request}</div>
            <button onClick={Request}>GRAPHQL-API 요청하기</button>
        </>
    )
}
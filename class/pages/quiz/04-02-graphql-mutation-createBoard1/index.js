import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CRERATE_BOARD = gql`
    mutation {
        createBoard(
            writer : "권콘솔"
            title : "콘솔점로그"
            contents : "console.log로 데이터를 확인 할 수 있어요!"
            ){
                message
            }
    }
`

export default function GraphqlMutationBoardPage(){
    const [request , setRequest] = useState("");

    const [createBoard] = useMutation(CRERATE_BOARD)
    
    const Request = async () => {

        const result = await createBoard();
        console.log(result);
        setRequest(result.data.createBoard.message);


    }

    return(
        <>
            <div>{request}</div>
            <button onClick={Request}>GRAPHQL-API 요청하기</button>
        </>
    )
}
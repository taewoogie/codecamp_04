import {useMutation, gql} from '@apollo/client'
import { useState } from 'react'

const CRERATE_BOARD = gql`
    mutation {
        createBoard(
            writer : "권태욱"
            title : "Graphql의 정석"
            contents : "구글링하기"
            ){
                message
            }
    }
`

export default function GraphqlMutationBoard1Page(){
    const [request , setRequest] = useState("");

    const [createBoard] = useMutation(CRERATE_BOARD)
    
    const Request = async () => {

        const result = await createBoard();
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
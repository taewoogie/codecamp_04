import { useMutation, useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query {
        fetchBoards{
            number
            writer
            title
            contents
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard ($number : Int) { 
        deleteBoard (number : $number) {
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    
`

const Column = styled.span`
    width: 15%;
`

export default function MapCheckboxPage(){

    const { data }      = useQuery(FETCH_BOARDS);
    const [deleteBoard] = useMutation(DELETE_BOARD);

    async function onClickDelete(event){

            await deleteBoard({
                variables : {number : Number(event.target.id) , key : event.target.key},
                refetchQueries : [{ query : FETCH_BOARDS }]
            })

    }

    return (
        <div>
            {data?.fetchBoards.map(( el , index ) => (
                <Row>
                    <Column><input type="checkbox" key={el.number}/></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column><button id={el.number} onClick={onClickDelete}>삭제하기</button></Column>
                </Row>
            ))}

        </div>

    )
}
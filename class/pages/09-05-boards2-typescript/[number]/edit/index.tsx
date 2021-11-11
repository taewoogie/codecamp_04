import { useQuery,gql }    from "@apollo/client";
import { useRouter }       from "next/router"
import BoardWriteContainer from "../../../../src/components/units/board/write4/BoardWrite.Container";

const FETCH_BOARD = gql`
    query fetchBoard( $number : Int ){
        fetchBoard (number : $number){
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage(){
   
    const router = useRouter();

    const { data } = useQuery( FETCH_BOARD , {
        variables : { number : Number(router.query.number) }
    });


    return <BoardWriteContainer isEdit         = {true}
                                fetchBoardData = {data}
    />
}
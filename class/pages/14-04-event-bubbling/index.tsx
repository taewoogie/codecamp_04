import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
    query fetchBoards( $page : Int ){
        fetchBoards( page : $page ){
            _id
            writer
            title
        }
    }
`

export default function EventBubblingPage() {
    
    const {data : fetchBoardsData } = useQuery(FETCH_BOARDS , {
        variables : {page : 1}
    })

    const onClickRow = (event) => {
        // alert(event.target.id)
        // console.log(event.target.id)
        console.log(event.currentTarget.id)
    }
        
    return(
        <>
            <h1>이벤트 버블링</h1>
            <div>
                {fetchBoardsData?.fetchBoards?.map((el) => (
                    <div key={el._id} id={el._id} onClick={onClickRow}  >
                        <span>{el.title}</span>
                        <span>{el.writer}</span>
                    </div>
                ))}
            </div>
        </>
    )
}
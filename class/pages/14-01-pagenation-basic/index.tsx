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

export default function  PageNationBasicPage() {
    
    const {data : fetchBoardsData , refetch } = useQuery(FETCH_BOARDS , {
        variables : {page : 1}
    })   
    
    const onClickPage = (event) => {
        refetch({ page : Number(event.target.id) });
    }
    
    return(
        <>
            <h1>페이지네이션 연습</h1>
            <div>
                {fetchBoardsData?.fetchBoards?.map((el) => {
                    
                    <div key={el._id}>
                        {el.title} {el.writer}
                    </div>
                })}
            </div>
            {[1,2,3,4,5,6,7,8,9,10].map((el) => (
                <span onClick={onClickPage} id={String(el)} style={{margin : "10px" , cursor:"pointer"}}>
                    {el}
                </span>
            ))}
            {/* <span onClick={onClickPage} id="1"> 1 </span>
            <span onClick={onClickPage} id="2"> 2 </span> */}
        </>
    )
}
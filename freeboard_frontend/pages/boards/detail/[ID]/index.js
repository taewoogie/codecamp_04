import { useRouter } from 'next/router';
import { useQuery,gql } from "@apollo/client";
import {} from '../../../../styles/boards/detail'

const FETCH_BOARD = gql`
query fetchBoard ( $boardId : ID! ) {
    fetchBoard ( boardId : $boardId ) {
        _id
        writer
        title
        contents
    }
}
`
export default function BoardDetailPage() {

    const router = useRouter();

    const { data } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID } });
    // console.log("ddd",data)

    return(
        // Container

        // Wrapper

        // 

        <>
            <div>보드 디테일 페이지 이동 완료</div>
            <div>나의 게시물 ID : {router.query.ID}</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>게시글 제목 : {data?.fetchBoard.title}</div>
            <div>게시글 내용 : {data?.fetchBoard.contents}</div>
        </>
    )
}
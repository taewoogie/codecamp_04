import { useRouter } from "next/router";
import { useQuery , useMutation }  from "@apollo/client";
import { FETCH_BOARD , DELETE_BOARD } from './BoardDetail.Queries'
import BoardDetailPresenter from "./BoardDetail.Presenter";

export default function BoardDetailContainer(){
    const router = useRouter();
    // 게시글 상세 조회
    const { data } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID }});
    // 게시글 삭제
    const [deleteBoard] = useMutation(DELETE_BOARD);


    // 목록으로
    const onClickGoBackList = () => {
        // router.push('/boards/list/')
        router.push('../../../../../boards/list');
    }

    // 수정하기
    const onClickModify = () => {
        alert("기능 구현 예정 입니다.")
    }

    // 삭제하기
    const onClickDelete = async () => {
        console.log(("fetchBoard.ID : " + router.query.ID));
        try{

            const result = await deleteBoard({variables : { boardId : router.query.ID }})
            alert("정상적으로 삭제되었습니다!");
            router.push('../../../../../boards/list');

        } catch(error) {
            console.log(error.message)
        }
    }
    

    return(
        <BoardDetailPresenter
                boardId           = {data?.fetchBoard.ID}
                fetchWriter       = {data?.fetchBoard.writer}
                fetchTitle        = {data?.fetchBoard.title}
                fetchContents     = {data?.fetchBoard.contents}
                onClickDelete     = {onClickDelete}
                onClickGoBackList = {onClickGoBackList}
                onClickModify     = {onClickModify}


        />
    )
}
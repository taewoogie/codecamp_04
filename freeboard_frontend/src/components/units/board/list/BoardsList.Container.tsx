import BoardsListPresenter                         from "./BoardsList.Presenter";
import { useQuery }                                from "@apollo/client"
import { useRouter }                               from 'next/router'
import { FETCH_BOARDS , FETCH_BOARDS_OF_THE_BEST } from './BoardsList.Queries'


export default function BoardsListContainer(){
    
    const router = useRouter();
    
    // 베스트 게시물 조회
    const { data:ad }  = useQuery(FETCH_BOARDS_OF_THE_BEST);
    // 전체 게시글 리스트 조회
    const { data:ad2 } = useQuery(FETCH_BOARDS);

    // 전체 게시물의 해당 게시글 제목 클릭
    const onClickColumnTitle = (event:{target:HTMLDivElement}) => {
    // const onClickColumnTitle = (event:{MouseEventHandler<HTMLDivElement>():any;}) => {
        // 상세 페이지로 이동
        router.push(`/boards/detail/${event.target.id}`);
    }
    // 베스트 게시글 제목 클릭
    // const onClickBestBoardsId = (event:{target:HTMLDivElement}) => {
    const onClickBestBoardsId = (event:{target:HTMLDivElement}) => {
        // 상세 페이지로 이동
        router.push(`/boards/detail/${event.target.id}`);
    }
    // 게시글 등록 버튼
    const onClickRegisterBtn = () =>  { 
        router.push(`/boards/write/`);
    }


    return(
        <BoardsListPresenter 
            ad                  = {ad}
            ad2                 = {ad2}
            onClickColumnTitle  = {onClickColumnTitle}
            onClickBestBoardsId = {onClickBestBoardsId}
            onClickRegisterBtn  = {onClickRegisterBtn}
        />

    )
}
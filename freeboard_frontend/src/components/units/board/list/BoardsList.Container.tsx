import BoardsListPresenter               from "./BoardsList.Presenter";
import { useQuery }                      from "@apollo/client"
import { useRouter }                     from 'next/router'
import { FETCH_BOARDS , FETCH_BOARDS_OF_THE_BEST , FETCH_BOARDS_COUNT } from './BoardsList.Queries'
import { useState , MouseEvent }                      from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";


export default function BoardsListContainer(){
    
    const router = useRouter();
    
    // 베스트 게시물 조회
    const { data:fetchBoardsOfTheBest }  = useQuery(FETCH_BOARDS_OF_THE_BEST);
    // 전체 게시글 리스트 조회
    // const { data:fetchBoards } = useQuery(FETCH_BOARDS);
    // const { data:fetchBoards } = useQuery(FETCH_BOARDS);

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



    // *************************
    //        페이지 네이션 
    // *************************
    const [startPage, setStartPage] = useState(1);
    const { data:fetchBoards, refetch } = useQuery<Pick<IQuery,"fetchBoards">,IQueryFetchBoardsArgs>(FETCH_BOARDS,{variables: { page: startPage },});
  
    const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
    const lastPage = dataBoardsCount ? Math.ceil(dataBoardsCount?.fetchBoardsCount / 10) : 0;
    
    function onClickPage(event: MouseEvent<HTMLSpanElement>) {
      if (event.target instanceof Element)
        refetch({ page: Number(event.target.id) });
    }
  
    function onClickPrevPage() {
      if (startPage <= 1) return;
      setStartPage((prev) => prev - 10);
    }
  
    function onClickNextPage() {
      if (startPage + 10 > lastPage) return;
      setStartPage((prev) => prev + 10);
    }    
    
    return(
        <BoardsListPresenter 
            fetchBoardsOfTheBest = {fetchBoardsOfTheBest}
            fetchBoards          = {fetchBoards}
            onClickColumnTitle   = {onClickColumnTitle}
            onClickBestBoardsId  = {onClickBestBoardsId}
            onClickRegisterBtn   = {onClickRegisterBtn}
            onClickPage          = {onClickPage}
            onClickPrevPage      = {onClickPrevPage}
            onClickNextPage      = {onClickNextPage}
            startPage            = {startPage}
            lastPage             = {lastPage}

        />

    )
}
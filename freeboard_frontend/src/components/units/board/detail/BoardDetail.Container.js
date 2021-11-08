import { useRouter } from "next/router";
import { useQuery }  from "@apollo/client";
// import { useState }        from 'react';
import { FETCH_BOARD } from '../detail/BoardDetail.Queries'
import BoardDetailPresenter from "./BoardDetail.Presenter";

export default function BoardDetailContainer(){
    const router = useRouter();
    
    const { data } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID } });
    // console.log("ddd",data)

    return(
        <BoardDetailPresenter
                boardId = {data?.fetchBoard.ID}
                fetchWriter = {data?.fetchBoard.writer}
                fetchTitle = {data?.fetchBoard.title}
                fetchContents = {data?.fetchBoard.contents}


        />
    )
}
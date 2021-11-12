import { useRouter } from "next/router";
import { useQuery , useMutation }  from "@apollo/client";
import { FETCH_BOARD , DELETE_BOARD } from './BoardDetail.Queries'
import BoardDetailPresenter from "./BoardDetail.Presenter";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS , CREATE_BOARD_COMMENT } from "../comments/BoardComments.Queries";

export default function BoardDetailContainer(){
    const router = useRouter();
    // 게시글 상세 조회
    const { data } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID }});
    // 게시글 삭제
    const [deleteBoard] = useMutation(DELETE_BOARD);
    
    
    // *************
    //     댓글
    // *************
    // 조회
    const { data:cmts } = useQuery( FETCH_BOARD_COMMENTS , { variables : { boardId : router.query.ID }});
    const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT)

    const [ commentsWriter      , setCommentsWriter      ] = useState("");
    const [ commentsPassword    , setCommentsPassword    ] = useState("");
    const [ commentsArea        , setCommentsArea       ] = useState("");




    // 목록으로
    const onClickGoBackList = () => {
        // router.push('/boards/list/')
        router.push('../../../../../boards/list');
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


    // ********
    //   댓글
    // ********
    // 작성자명 입력 
    const onChangeCommentsWriter = (event) => {
        setCommentsWriter( event.target.value )
    }
    // 비밀번호 입력
    const onChangeCommentsPassword= (event) => {
        setCommentsPassword( event.target.value )
    }
    // 댓글 입력
    const onChangeCommentsArea = (event) => {
        setCommentsArea( event.target.value )
    }

    // 댓글 등록
    const onClickRegComments = async() => {
        console.log("작성자명 : " + commentsWriter )
        console.log("비밀번호 : " + commentsPassword )
        console.log("내용 : "    + commentsArea)
        
        if(!commentsPassword) alert("비밀번호를 입력해주세요.")

        try{
            const result = await createBoardComment({
                variables : {
                    createBoardCommentInput: {
                        writer    : commentsWriter,
                        password  : commentsPassword,
                        contents  : commentsArea,
                        rating    : 4
                    } ,
                    boardId : router.query.ID
                },
                refetchQueries : [{ query : FETCH_BOARD_COMMENTS }]
            });
            console.log(result);
            alert('정상적으로 등록 되었습니다!');        
        } catch (error) {
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
                
                //************
                //    댓글
                //************
                onClickRegComments        = {onClickRegComments}
                onChangeCommentsWriter    = {onChangeCommentsWriter}
                onChangeCommentsPassword  = {onChangeCommentsPassword}
                onChangeCommentsArea      = {onChangeCommentsArea}
                commentsArea              = {commentsArea}
                cmts                      = {cmts}

                
                


        />
    )
}
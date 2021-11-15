import { useRouter }                                   from "next/router";
import { useQuery , useMutation }                      from "@apollo/client";
import { FETCH_BOARD , DELETE_BOARD }                  from './BoardDetail.Queries'
import BoardDetailPresenter                            from "./BoardDetail.Presenter";
import { useState }                                    from "react";
import { FETCH_BOARD_COMMENTS , CREATE_BOARD_COMMENT , DELETE_BOARD_COMMENT } from "../comments/BoardComments.Queries";

export default function BoardDetailContainer(props){
    const router = useRouter();
    // 게시글 상세 조회
    const { data:board } = useQuery( FETCH_BOARD , { variables : { boardId : router.query.ID }});
    // 게시글 삭제
    const [deleteBoard] = useMutation(DELETE_BOARD);
    // 게시글 전체 목록으로
    const onClickGoBackList = () => {
        router.push('../../../../../boards/list');
    }    
    // 게시글 삭제하기
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
    
    // *************
    //     댓글
    // *************
    // 댓글 조회
    const { data:cmts } = useQuery( FETCH_BOARD_COMMENTS , { variables : { boardId : router.query.ID }});
    // 댓글 삭제
    const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
    console.log(cmts);
    // 댓글 별점
    const [starValue, setValue] = useState(0)

    // 댓글 등록
    const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT);
    const [ commentsWriter      , setCommentsWriter      ] = useState("");
    const [ commentsPassword    , setCommentsPassword    ] = useState("");
    const [ commentsArea        , setCommentsArea        ] = useState("");

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
    // 별점 
    const onChangeRate = (value:number) => {
        // alert(value);
        setValue(value);
    }
    // 댓글 등록
    const onClickRegComments = async() => {
        console.log("작성자명 : " + commentsWriter )
        console.log("비밀번호 : " + commentsPassword )
        console.log("내용 : "    + commentsArea)
        console.log("별점 : "    + starValue)
        
        if(!commentsPassword) alert("비밀번호를 입력해주세요.")

        try{
            const result = await createBoardComment({
                variables : {
                    createBoardCommentInput: {
                        writer    : commentsWriter,
                        password  : commentsPassword,
                        contents  : commentsArea,
                        rating    : starValue
                    } ,
                    boardId : router.query.ID
                },
                
                // refetch 시 조회 할 때 ID값을 같이 보내 줘야 한다.
                refetchQueries : [{ query : FETCH_BOARD_COMMENTS, variables : { boardId : router.query.ID } }]
            });
            console.log(result);
            alert('정상적으로 등록 되었습니다!'); 
            
        } catch (error) {
            console.log(error.message)
        }
    }

    // 댓글 삭제하기
    const onClickDeleteComments = async (event) => {

        // console.log(("BoardCommentID : " + event.target.id));
        const deletePasswordChk = prompt("비밀번호를 입력해주세요");

        try{
            const result = await deleteBoardComment({
                variables : { 
                    boardCommentId : event.target.id,
                    password       : deletePasswordChk
                },
                refetchQueries : [{ query : FETCH_BOARD_COMMENTS, variables : { boardId : router.query.ID } }]
            })
            console.log(result);
            alert("정상적으로 삭제되었습니다!");
        } catch(error) {
            console.log(error.message)
            alert(error.message);
        }
    }

    return(
        <BoardDetailPresenter
                boardId           = {board?.fetchBoard.ID}
                fetchWriter       = {board?.fetchBoard.writer}
                fetchTitle        = {board?.fetchBoard.title}
                fetchContents     = {board?.fetchBoard.contents}
                onClickDelete     = {onClickDelete}
                onClickGoBackList = {onClickGoBackList}
                //************
                //    댓글
                //************
                onClickRegComments        = {onClickRegComments}
                onChangeCommentsWriter    = {onChangeCommentsWriter}
                onChangeCommentsPassword  = {onChangeCommentsPassword}
                onChangeCommentsArea      = {onChangeCommentsArea}
                onClickDeleteComments     = {onClickDeleteComments}
                cmts                      = { cmts }
                onChangeRate              = { onChangeRate }
                starValue                 = { starValue }
        />
    )
}
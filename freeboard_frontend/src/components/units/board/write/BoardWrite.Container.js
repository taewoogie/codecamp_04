import BoardWritePresenter from './BoardWrite.Presenter'
import { useMutation }     from '@apollo/client';
import { useState }        from 'react';
import { useRouter }       from 'next/router'
import { CREATE_BOARD }    from './BoardWrite.Queries'

export default function BoardWriteContainer(){

    const router = useRouter();


    const [createBoard] = useMutation(CREATE_BOARD)

    const [ writer          , setWriter ]          = useState("");
    const [ writerErr       , setWriterErr ]       = useState("");
    const [ password        , setPassword ]        = useState("");
    const [ passwordErr     , setPasswordErr ]     = useState("");
    const [ boardTitle      , setBoardTitle ]      = useState("");
    const [ boardTitleErr   , setBoardTitleErr ]   = useState("");
    const [ boardContent    , setBoardContent ]    = useState("");
    const [ boardContentErr , setBoardContentErr ] = useState("");

    const WriterChk = (event) => {
        setWriter(event.target.value);
        if(setWriter(event.target.value) !== "") 
            setWriterErr("");
    }

    const PasswordChk = (event) => {
        setPassword(event.target.value);
        if(setPassword(event.target.value) !== "") 
            setPasswordErr("");
    }

    const BoardTitleChk = (event) => {
        setBoardTitle(event.target.value);
        if(setBoardTitle(event.target.value) !== "") 
            setBoardTitleErr("");
    }

    const BoardContentChk = (event) => {
        setBoardContent(event.target.value);
        if(setBoardContent(event.target.value) !== "")
            setBoardContentErr("");
    }
    
    const RegisterConfirm = async () => {


        // if(writer.length === 0) {
        //     setWriterErr("작성자명을 입력해주세요.");
        // } 
        // else {
        //     setWriterErr("");
        // }
        if(writer === "") {
            setWriterErr("작성자명을 입력해주세요.");
        } 
        
        // if (password.length === 0) {
        //     setPasswordErr("비밀번호를 입력해주세요.");
        // } 
        // else {
        //     setPasswordErr("");
        // }

        if(password === ""){
            setPasswordErr("비밀번호를 입력해주세요.");
        }
        
        // if (boardTitle.length === 0) {
        //     setBoardTitleErr("게시물 제목을 작성해주세요.");
        // } 
        // else {
        //     setBoardTitleErr("");
        // }
        if(boardTitle === ""){
            setBoardTitleErr("제목을 입력해주세요.");
        }
        
        // if (boardContent.length === 0) {
        //     setBoardContentErr("게시물 내용을 입력해주세요.");
        // } 
        // else {
        //     setBoardContentErr("");
        // }
        if(boardContent === ""){
            setBoardContentErr("내용을 작성해주세요.");
        }

        if(writer !== "" && password !== "" && boardTitle !== "" && boardContent !== "") {
            
            try{
                const result = await createBoard({
                    variables : {
                        createBoardInput: {
                            writer    : writer,
                            password  : password,
                            title     : boardTitle,
                            contents  : boardContent
                        }
                    }
                });
                console.log(result);
                console.log(result.data.createBoard.message);
                alert('게시물이 등록 되었습니다!');

                // 상세 페이지로 이동
                router.push(`/boards/detail/${result.data.createBoard._id}`);

            }catch(error){
                console.log(error.message)
            }
        }

    }
    return(
        <BoardWritePresenter WriterChk       = {WriterChk}
                             PasswordChk     = {PasswordChk}
                             BoardTitleChk   = {BoardTitleChk}
                             BoardContentChk = {BoardContentChk}
                             RegisterConfirm = {RegisterConfirm}
                             writerErr       = {writerErr}
                             passwordErr     = {passwordErr}
                             boardTitleErr   = {boardTitleErr}
                             boardContentErr = {boardContentErr}



        
        />
    )
}

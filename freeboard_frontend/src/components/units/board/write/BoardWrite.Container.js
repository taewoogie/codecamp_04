import BoardWritePresenter             from './BoardWrite.Presenter';
import { useMutation }                 from '@apollo/client';
import { useState }                    from 'react';
import { useRouter }                   from 'next/router';
import { CREATE_BOARD , UPDATE_BOARD } from './BoardWrite.Queries';

export default function BoardWriteContainer(props){

    const router = useRouter();

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const [ writer          , setWriter          ] = useState("");
    const [ writerErr       , setWriterErr       ] = useState("");
    const [ password        , setPassword        ] = useState("");
    const [ passwordErr     , setPasswordErr     ] = useState("");
    const [ boardTitle      , setBoardTitle      ] = useState("");
    const [ boardTitleErr   , setBoardTitleErr   ] = useState("");
    const [ boardContent    , setBoardContent    ] = useState("");
    const [ boardContentErr , setBoardContentErr ] = useState("");
    const [ backColor       , setBackColor       ] = useState(false);

    const WriterChk = (event) => {
        const writerTarget = event.target.value;
        setWriter(event.target.value);
        if(setWriter(event.target.value) !== "") 
            setWriterErr("");

        btnBackColor(writerTarget , password , boardTitle , boardContent);    
    }

    const PasswordChk = (event) => {
        const passwordTarget = event.target.value
        setPassword(event.target.value);
        if(setPassword(event.target.value) !== "") 
            setPasswordErr("");
        
        btnBackColor(writer, passwordTarget, boardTitle , boardContent);
    }

    const BoardTitleChk = (event) => {
        const boardTitleTarget = event.target.value;
        setBoardTitle(event.target.value);
        if(setBoardTitle(event.target.value) !== "") 
            setBoardTitleErr("");

        btnBackColor(writer, password, boardTitleTarget, boardContent);
    }

    const BoardContentChk = (event) => {
        const boardContentTarget = event.target.value;
        setBoardContent(event.target.value);
        if(setBoardContent(event.target.value) !== "")
            setBoardContentErr("");

        btnBackColor( writer, password, boardTitle, boardContentTarget);
    }

    const btnBackColor = (writerTarget , passwordTarget, boardTitleTarget, boardContentTarget) => {

        console.log("SetBackColor : " +  backColor );

        if(writerTarget !== '' && passwordTarget !== '' && boardTitleTarget !== '' && boardContentTarget !== '') {
            setBackColor(true);
        } else {
            setBackColor(false);
        }

    }
    
    const RegisterConfirm = async () => {

        if(writer === "") {
            setWriterErr("작성자명을 입력해주세요.");
        }
        
        if(password === ""){
            setPasswordErr("비밀번호를 입력해주세요.");
        }

        if(boardTitle === ""){
            setBoardTitleErr("제목을 입력해주세요.");
        }
        
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
                alert('정상적으로 등록 되었습니다!');

                // 상세 페이지로 이동
                router.push(`/boards/detail/${result.data.createBoard._id}`);

            }catch(error){
                console.log(error.message)
            }
        }

    }

    const Edit = async () => {
        
        try{
            const result = await updateBoard({
                variables : {
                    updateBoardInput : { title : boardTitle, contents : boardContent } ,
                                      password ,
                                      boardId  : router.query.ID
                }
            })
            alert("수정이 완료 되었습니다.");
            console.log("RESULT = " + result);
            router.push(`/boards/detail/${result.data.updateBoard._id}`);
        } catch (error) {
            console.log(error.message);
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
                             backColor       = {backColor}
                             isEdit          = {props.isEdit}
                             Edit            = {Edit}



        
        />
    )
}

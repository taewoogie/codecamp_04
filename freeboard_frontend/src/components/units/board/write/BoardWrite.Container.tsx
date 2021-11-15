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

    // 유효성 검사 후 버튼 색 변경
    const btnBackColor = (writerTarget , passwordTarget, boardTitleTarget, boardContentTarget) => {
        // if(!props.isEdit)
            if(writerTarget !== '' && passwordTarget !== '' && boardTitleTarget !== '' && boardContentTarget !== '') {
                setBackColor(true);
            } else {
                setBackColor(false);
            }
        
    }
    
    // 등록
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

    // 수정
    const Edit = async () => {

        if(password === ""){
            setPasswordErr("비밀번호를 입력해주세요.");
        }

        // 수정 페이지에서 작성한 항목을 확인 할 배열 생성
        const editVariables = { 
            boardId : router.query.ID,
            password : password,
            updateBoardInput : {}
        }

        // ******************
        //     수업 내용
        // ******************

        // 항목 중 변경 된 값이 있을 때만 myVariables 객체 안에 푸쉬 해준다.
        // if(writer       !== "") editVariables.updateBoardInput.writer   = writer
        // if(boardTitle   !== "") editVariables.updateBoardInput.title    = boardTitle
        // if(boardContent !== "") editVariables.updateBoardInput.contents = boardContent
        
        // *****************
        //     예외 처리 
        // *****************
        
        // 게시글 제목 미입력시 기존 조회해 온 데이터 셋팅
        if(boardTitle !== "") {
            editVariables.updateBoardInput.title   = boardTitle
        } else {
            editVariables.updateBoardInput.title   = props.fetchBoardData.fetchBoard.title
        }
        console.log("제목 : " + editVariables.updateBoardInput.title)
        
        // 게시글 내용 미입력시 기존 조회해 온 데이터 셋팅
        if(boardContent !== "") {
            editVariables.updateBoardInput.contents   = boardContent
        } else {
            editVariables.updateBoardInput.contents   = props.fetchBoardData.fetchBoard.contents
        }
        console.log("내용 : " + editVariables.updateBoardInput.contents)

        try{
            const result = await updateBoard({
                variables : editVariables
            })
            alert("수정이 완료 되었습니다.");
            router.push(`/boards/detail/${result.data.updateBoard._id}`);

        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    }

    return(
        <BoardWritePresenter WriterChk       = { WriterChk }
                             PasswordChk     = { PasswordChk }
                             BoardTitleChk   = { BoardTitleChk }
                             BoardContentChk = { BoardContentChk }
                             RegisterConfirm = { RegisterConfirm }
                             writerErr       = { writerErr }
                             passwordErr     = { passwordErr }
                             boardTitleErr   = { boardTitleErr }
                             boardContentErr = { boardContentErr }
                             backColor       = { backColor }
                             isEdit          = { props.isEdit }
                             Edit            = { Edit }
                             fetchBoardData  = { props.fetchBoardData }
        />
    )
}
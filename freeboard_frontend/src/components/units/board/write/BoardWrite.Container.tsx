import BoardWritePresenter             from './BoardWrite.Presenter';
import { useMutation }                 from '@apollo/client';
import { useState }                    from 'react';
import { useRouter }                   from 'next/router';
import { CREATE_BOARD , UPDATE_BOARD } from './BoardWrite.Queries';

export default function BoardWriteContainer(props){

     console.log(props.fetchBoardData)

    const addressInfo = props.fetchBoardData?.fetchBoard?.boardAddress

    console.log(addressInfo);

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

    // 11.16 youtube 링크 추가
    const [ youtubeUrl      , setYoutubeUrl      ] = useState("");
    // 11.16 주소 추가
    const [isModalVisible   , setIsModalVisible  ] = useState(false);
    const [Address          , setAddress         ] = useState(addressInfo?.address);
    const [AddressSub       , setAddressSub      ] = useState(addressInfo?.addressDetail);
    const [ZoneCode         , setZoneCode        ] = useState(addressInfo?.zipcode);


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

    const onChangeYoutubeUrl = (event) => {
        const YoutubeUrlTarget = event.target.value;
        setYoutubeUrl(YoutubeUrlTarget);
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
                            writer     : writer,
                            password   : password,
                            title      : boardTitle,
                            contents   : boardContent,
                            youtubeUrl : youtubeUrl,
                            boardAddress : {
                                zipcode : ZoneCode,
                                address : Address,
                                addressDetail : AddressSub
                            }
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
            updateBoardInput : {
                boardAddress : {}
            }
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

        // 11.16 youtube 추가
        if(youtubeUrl !== "") {
            editVariables.updateBoardInput.youtubeUrl = youtubeUrl
        } else {
            editVariables.updateBoardInput.youtubeUrl = props.fetchBoardData.fetchBoard.youtubeUrl
        }
        console.log("youtube : " + editVariables.updateBoardInput.youtubeUrl)
        // // 주소
        if(Address !== ""){
            editVariables.updateBoardInput.boardAddress.address = Address
        } else {
            editVariables.updateBoardInput.boardAddress.address = props.fetchBoardData.fetchBoard.boardAddress.address
        }
        console.log("주소 : " + editVariables.updateBoardInput.boardAddress.address)
        // // 상세주소
        if(AddressSub !== ""){
            editVariables.updateBoardInput.boardAddress.addressDetail = AddressSub
        } else {
            editVariables.updateBoardInput.boardAddress.addressDetail = props.fetchBoardData.fetchBoard.boardAddress.addressDetail
        }
        console.log("상세주소 : " + editVariables.updateBoardInput.boardAddress.addressDetail)
        // // 우편번호
        if(ZoneCode !== ""){
            editVariables.updateBoardInput.boardAddress.zipcode = ZoneCode
        } else {
            editVariables.updateBoardInput.boardAddress.zipcode = props.fetchBoardData.fetchBoard.boardAddress.zipcode
        }
        console.log("우편번호 : " + editVariables.updateBoardInput.boardAddress.zipcode)

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

    // 상세주소 입력
    const onChangeAddressSub = (event) => {
        const AddressSubTarget = event.target.value;

        if(AddressSubTarget !== ""){
            setAddressSub(AddressSubTarget);
        }
    }

    const onChangeAddress = (event) => {
        const AddressTarget = event.target.value;

        if(AddressTarget !== "") {
            setAddress(AddressTarget);
        }
    }
    
    const onChangeZipcode = (event) => {
        const ZipcodeTarget = event.target.value;

        if(ZipcodeTarget !== "") {
            setZoneCode(ZipcodeTarget);
        }
    }

    // 주소 핸들러
    const onToggleModal = () => {
      setIsModalVisible(prev => !prev);
    }
    // 주소 핸들러 종료 후 처리
    const handleComplete = (data:any) => {
        console.log(data);
        setAddress(data.address);
        setZoneCode(data.zonecode);
        setIsModalVisible(prev => !prev);
    };

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

                            //  11.16 youtube + 주소록
                             onChangeYoutubeUrl = { onChangeYoutubeUrl }
                             onToggleModal      = { onToggleModal }
                             handleComplete     = { handleComplete }
                             isModalVisible     = { isModalVisible }
                             Address            = { Address }
                             AddressSub         = { AddressSub }
                             ZoneCode           = { ZoneCode }
                             onChangeAddressSub = { onChangeAddressSub }
                             onChangeAddress    = { onChangeAddress }
                             onChangeZipcode    = { onChangeZipcode }

                             

        />
    )
}
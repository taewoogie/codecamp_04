import { useState } from "react";
import { useMutation, gql} from '@apollo/client';
import { useRouter } from 'next/router'
import { Container, 
         Wrapper, 
         Title,
         FormTitle, 
         HeaderWrapper,
         HeaderWrapper_left,
         HeaderWrapper_right,
         Writer,
         Password,
         BoardTitleWrapper,
         BoardTitle,
         BoardContent,
         BoardContentWrapper,
         AddressWrapper,
         MainAddressWrapper,
         AddressNum,
         AddressNumSearch,
         SubAddressWrapper,
         AddressSub,
         AddressSub2,
         UtubeWrapper,
         UtubeLink,
         PhotoWrapper,
         PhotoListWrapper,
         PhotoList,
         MainSettingWrapper,
         MainSettingItem,
         FooterWrapper,
         FooterBtn,
         ErrMessage,
         MainSettingItemWrapper,
         TitleText
         } from "../../../styles/boards/new";
// import { TitleText } from "../../../styles/boards/new";
         

const CREATE_BOARD = gql`
    mutation createBoard( $createBoardInput : CreateBoardInput!) {

        createBoard(createBoardInput : $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`
          

export default function indexPage(){
    
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
            <Container>
                <Wrapper>
                <Title>
                    게시물 등록
                </Title>
                    {/* header */}
                    
                    {/* body */}
                    <HeaderWrapper>
                        <HeaderWrapper_left>
                            <TitleText>작성자</TitleText>
                            <Writer type="text" placeholder="이름을 적어주세요." onChange={WriterChk}/>
                            <ErrMessage>{writerErr}</ErrMessage>
                        </HeaderWrapper_left>
                        
                        <HeaderWrapper_right>
                            <TitleText>비밀번호</TitleText>
                            <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={PasswordChk} />
                            <ErrMessage>{passwordErr}</ErrMessage>
                        </HeaderWrapper_right>
                    </HeaderWrapper>

                    <BoardTitleWrapper>
                        <TitleText>제목</TitleText>
                        <BoardTitle type="text" placeholder="제목을 작성해주세요." onChange={BoardTitleChk} />
                        <ErrMessage>{boardTitleErr}</ErrMessage>
                    </BoardTitleWrapper>

                    <BoardContentWrapper>
                        <TitleText>내용</TitleText>
                        <BoardContent type="textarea" placeholder="내용을 작성해주세요." onChange={BoardContentChk} />
                        <ErrMessage>{boardContentErr}</ErrMessage>
                    </BoardContentWrapper>

                    <AddressWrapper>
                        <TitleText>주소</TitleText>
                        <MainAddressWrapper>
                            <AddressNum type="text" disabled placeholder="07250" />
                            <AddressNumSearch >우편번호 검색</AddressNumSearch>
                        </MainAddressWrapper>
                        <SubAddressWrapper>
                            <AddressSub type="text" placeholder="상세주소를 입력해주세요" />
                            <AddressSub2 type="text" placeholder="상세주소를 입력해주세요" />
                        </SubAddressWrapper>
                    </AddressWrapper>

                    <UtubeWrapper>
                        <TitleText>유튜브</TitleText>
                        <UtubeLink type="text" placeholder="링크를 복사해주세요." />
                        {/* <div>
                        </div> */}
                    </UtubeWrapper>

                    <PhotoWrapper>
                        <TitleText>사진첨부</TitleText>
                        <PhotoListWrapper>
                            <PhotoList>Upload</PhotoList>
                            <PhotoList>Upload</PhotoList>
                            <PhotoList>Upload</PhotoList>
                        </PhotoListWrapper>
                    </PhotoWrapper>

                    <MainSettingWrapper>
                        <TitleText>메인 설정</TitleText>
                        <MainSettingItemWrapper>
                            <MainSettingItem type="radio" id="contents" /> 유튜브
                            <MainSettingItem type="radio" id="contents" /> 사진
                        </MainSettingItemWrapper>
                    </MainSettingWrapper>


                    {/* footer */}
                    <FooterWrapper>
                        <div>
                            <FooterBtn onClick={RegisterConfirm} >등록하기</FooterBtn>
                        </div>
                    </FooterWrapper>
                </Wrapper>
            </Container>
    )
}
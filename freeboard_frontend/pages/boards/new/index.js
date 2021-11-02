import { useState } from "react";
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
        //  MainSettingItemWrapper,
         MainSettingItem,
         FooterWrapper,
         FooterBtn,
         ErrMessage
         } from "../../../styles/boards/new";

export default function indexPage(){

    const [ writer , setWriter ] = useState("");
    const [ writerErr , setWriterErr ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ passwordErr , setPasswordErr ] = useState("");
    const [ boardTitle , setBoardTitle ] = useState("");
    const [ boardTitleErr , setBoardTitleErr ] = useState("");
    const [ boardContent , setBoardContent ] = useState("");
    const [ boardContentErr , setBoardContentErr ] = useState("");

    const WriterChk = (event) => {
        setWriter(event.target.value)
    }

    const PasswordChk = (event) => {
        setPassword(event.target.value)
    }

    const BoardTitleChk = (event) => {
        setBoardTitle(event.target.value)
    }

    const BoardContentChk = (event) => {
        setBoardContent(event.target.value)
    }
    
    const RegisterConfirm = () => {
        if(writer.length === 0) {
            setWriterErr("작성자명을 입력해주세요.");
        } else {
            setWriterErr("");
        }
        
        if (password.length === 0) {
            setPasswordErr("비밀번호를 입력해주세요.");
        } else {
            setPasswordErr("");
        }
        
        if (boardTitle.length === 0) {
            setBoardTitleErr("게시물 제목을 작성해주세요.");
        } else {
            setBoardTitleErr("");
        }
        
        if (boardContent.length === 0) {
            setBoardContentErr("게시물 내용을 입력해주세요.");
        } else {
            setBoardContentErr("");
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
                            <FormTitle>작성자</FormTitle>
                            <div>
                                <Writer type="text" placeholder="이름을 적어주세요." onChange={WriterChk}/>
                            </div>
                            <ErrMessage>{writerErr}</ErrMessage>
                        </HeaderWrapper_left>
                        
                        <HeaderWrapper_right>
                            <FormTitle>비밀번호</FormTitle>
                            <div>
                                <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={PasswordChk} />
                            </div>
                            <ErrMessage>{passwordErr}</ErrMessage>
                        </HeaderWrapper_right>
                    </HeaderWrapper>

                    <BoardTitleWrapper>
                        <FormTitle>제목</FormTitle>
                        <div>
                            <BoardTitle type="text" placeholder="제목을 작성해주세요." onChange={BoardTitleChk} />
                        </div>
                        <ErrMessage>{boardTitleErr}</ErrMessage>
                    </BoardTitleWrapper>

                    <BoardContentWrapper>
                        <FormTitle>내용</FormTitle>
                        <div>
                            <BoardContent type="textarea" placeholder="내용을 작성해주세요." onChange={BoardContentChk} />
                        </div>
                        <ErrMessage>{boardContentErr}</ErrMessage>
                    </BoardContentWrapper>

                    <AddressWrapper>
                        <FormTitle>주소</FormTitle>
                        <MainAddressWrapper>
                            <AddressNum type="text" disabled placeholder="07250" />
                            <AddressNumSearch >우편번호 검색</AddressNumSearch>
                        </MainAddressWrapper>
                        <SubAddressWrapper>
                            <AddressSub type="text" />
                            <AddressSub2 type="text" />
                        </SubAddressWrapper>
                    </AddressWrapper>

                    <UtubeWrapper>
                        <FormTitle>유튜브</FormTitle>
                        <div>
                            <UtubeLink type="text" placeholder="링크를 복사해주세요." />
                        </div>
                    </UtubeWrapper>

                    <PhotoWrapper>
                        <FormTitle>사진첨부</FormTitle>
                        <PhotoListWrapper>
                            <PhotoList>Upload</PhotoList>
                            <PhotoList>Upload</PhotoList>
                            <PhotoList>Upload</PhotoList>
                        </PhotoListWrapper>
                    </PhotoWrapper>

                    <MainSettingWrapper>
                        <FormTitle>메인 설정</FormTitle>
                        <div>
                            <MainSettingItem type="radio" id="contents" /> 유튜브
                            <MainSettingItem type="radio" id="contents" /> 사진
                        </div>
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
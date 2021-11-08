import { Container, 
    Wrapper, 
    Title,
    // FormTitle, 
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
    } from "../../../../../styles/boards/write/index";


export default function BoardWritePresenter(props){

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
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={props.WriterChk}/>
                    <ErrMessage>{props.writerErr}</ErrMessage>
                </HeaderWrapper_left>
                
                <HeaderWrapper_right>
                    <TitleText>비밀번호</TitleText>
                    <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={props.PasswordChk} />
                    <ErrMessage>{props.passwordErr}</ErrMessage>
                </HeaderWrapper_right>
            </HeaderWrapper>

            <BoardTitleWrapper>
                <TitleText>제목</TitleText>
                <BoardTitle type="text" placeholder="제목을 작성해주세요." onChange={props.BoardTitleChk} />
                <ErrMessage>{props.boardTitleErr}</ErrMessage>
            </BoardTitleWrapper>

            <BoardContentWrapper>
                <TitleText>내용</TitleText>
                <BoardContent type="textarea" placeholder="내용을 작성해주세요." onChange={props.BoardContentChk} />
                <ErrMessage>{props.boardContentErr}</ErrMessage>
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
                    <FooterBtn onClick={props.RegisterConfirm} >등록하기</FooterBtn>
                </div>
            </FooterWrapper>
        </Wrapper>
    </Container>
    )
}
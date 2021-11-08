import { Container , Wrapper , Title , HeaderWrapper , FormTitle , HeaderWrapper_right ,
    BoardTitleWrapper , BoardContentWrapper } from '../../../../../styles/boards/detail/index';

export default function BoardDetailPresenter(props){
    return(
        // Container
        <Container>
            {/* Wrapper */}
            <Wrapper>

                <Title>
                    게시물 상세 페이지
                </Title>
                    {/* header */}
                    
                    {/* body */}
                    <HeaderWrapper>
                        {/* <HeaderWrapper_left> */}
                            <div>작성자</div>
                            {/* <FormTitle>{data?.fetchBoard.writer}</FormTitle> */}
                            <FormTitle>{props.fetchWriter}</FormTitle>
                        {/* </HeaderWrapper_left> */}
                        
                        <HeaderWrapper_right>
                            <div></div>
                        </HeaderWrapper_right>
                    </HeaderWrapper>

                    <BoardTitleWrapper>
                        <div>제목</div>
                        <FormTitle>{props.fetchTitle}</FormTitle>
                    </BoardTitleWrapper>

                    <BoardContentWrapper>
                        <div>내용</div>
                        <FormTitle>{props.fetchContents}</FormTitle>
                    </BoardContentWrapper>

                    {/* <AddressWrapper>
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
                    
                    {/* <FooterWrapper>
                        <div>
                            <FooterBtn onClick={RegisterConfirm} >등록하기</FooterBtn>
                        </div>
                    </FooterWrapper> */}


                {/* <div>나의 게시물 ID : {router.query.ID}</div> */}


            </Wrapper>
        </Container>        
    )
}
import router from 'next/router';
import * as S from '../../../../../styles/boards/detail/index';

interface IProps {
    boardId?                 : string
    fetchWriter?             : string | number
    fetchTitle?              : string | number
    fetchContents?           : string | number
    onClickDelete            : () => void
    onClickGoBackList        : () => void
    onClickRegComments       : () => void
    onChangeCommentsWriter   : () => void
    onChangeCommentsPassword : () => void
    onChangeCommentsArea     : () => void
    cmts?                    : any
    
}
export default function BoardDetailPresenter(props : IProps){
    return(
        // Container
        <S.Container>
            {/* Wrapper */}
            <S.Wrapper>

                <S.Title>
                    게시물 상세 페이지
                </S.Title>
                    {/* header */}
                    
                    {/* body */}
                    <S.HeaderWrapper>
                        {/* <HeaderWrapper_left> */}
                            <div>작성자</div>
                            {/* <FormTitle>{data?.fetchBoard.writer}</FormTitle> */}
                            <S.FormTitle>{props.fetchWriter}</S.FormTitle>
                        {/* </HeaderWrapper_left> */}
                        
                        <S.HeaderWrapper_right>
                            <div></div>
                        </S.HeaderWrapper_right>
                    </S.HeaderWrapper>

                    <S.BoardTitleWrapper>
                        <div>제목</div>
                        <S.FormTitle>{props.fetchTitle}</S.FormTitle>
                    </S.BoardTitleWrapper>

                    <S.BoardContentWrapper>
                        <div>내용</div>
                        <S.FormTitle>{props.fetchContents}</S.FormTitle>
                    </S.BoardContentWrapper>

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
                    
                    <S.FooterWrapper>
                        <S.FooterBtn onClick={props.onClickGoBackList}>목록으로</S.FooterBtn>
                        {/* <FooterBtn onClick={() => router.push(`/boards/detail/${router.query.ID}/edit`)}>수정하기</FooterBtn> */}
                        <S.FooterBtn onClick={() => router.push(`/boards/detail/${router.query.ID}/edit`)}>수정하기</S.FooterBtn>
                        {/* <FooterBtn onClick={props.onClickEdit}>수정하기</FooterBtn> */}
                        <S.FooterBtn onClick={props.onClickDelete} id={props.boardId}>삭제하기</S.FooterBtn>
                    </S.FooterWrapper>
                    
                    
                    <S.Line>


                    </S.Line>


                    {/* 댓글 Wrapper */}
                    <S.BoardCommentsContainer>

                        <S.BoardCommentsTitleWrapper>
                            <S.VectorImg src="/images/Vector.png"></S.VectorImg>
                            <S.BoardCommentsTitle>댓글</S.BoardCommentsTitle>
                        </S.BoardCommentsTitleWrapper>

                        <S.BoardCommentsWriteWrapper>
                            <S.CommentsWrapper>
                                <S.CommentsWriter   type="text" onChange={props.onChangeCommentsWriter}   placeholder="작성자"></S.CommentsWriter>
                                <S.CommentsPassword type="text" onChange={props.onChangeCommentsPassword} placeholder="비밀번호"></S.CommentsPassword>
                                <S.StarImgWrapper>
                                    <S.StarImg src="/images/Star.png"></S.StarImg>
                                    <S.StarImg src="/images/Star.png"></S.StarImg>
                                    <S.StarImg src="/images/Star.png"></S.StarImg>
                                    <S.StarImg src="/images/Star.png"></S.StarImg>
                                    <S.StarImg src="/images/Star.png"></S.StarImg>
                                </S.StarImgWrapper>
                            </S.CommentsWrapper>
                            <S.CommentsRegBtn onClick={props.onClickRegComments}>등록하기</S.CommentsRegBtn>
                        </S.BoardCommentsWriteWrapper>

                        <S.BoardCommentsWrapper>
                            <S.BoardCommentsTextarea onChange={props.onChangeCommentsArea} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
                            
                            </S.BoardCommentsTextarea>
                        </S.BoardCommentsWrapper>

                    </S.BoardCommentsContainer>


                    {/* 댓글 조회 리스트 영역 */}
                    {props.cmts?.fetchBoardComments.map((el) => {
                    <S.BoardCommentsListContainer>
                        <S.profileImage src="/images/Vertor.svg"></S.profileImage>
                        <S.BoardCommentsListWrapper>
                            <S.BoardCommentsListHeaderWrapper>
                                <S.BoardCommentsWriter>{el.writer}</S.BoardCommentsWriter>
                                <S.StarImg>{el.rating}</S.StarImg>
                                <div>수정</div>
                                <div>삭제</div>
                            </S.BoardCommentsListHeaderWrapper>
                            
                            <S.BoardCommentsListBodyWrapper>
                                <S.BoardCommentsBody>{el.contents}</S.BoardCommentsBody>
                            </S.BoardCommentsListBodyWrapper>
                            
                            <S.BoardCommentsListFooter>
                                <div>{el.createdAt}</div>
                            </S.BoardCommentsListFooter>   
                        </S.BoardCommentsListWrapper>
                    </S.BoardCommentsListContainer>
                    })}
            </S.Wrapper>
        </S.Container>        
    )
}
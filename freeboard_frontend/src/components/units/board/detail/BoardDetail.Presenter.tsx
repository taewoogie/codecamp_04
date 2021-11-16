import router from 'next/router';
import * as S from '../../../../../styles/boards/detail/index';
import { Rate } from 'antd';
import styled from '@emotion/styled';

// import ReactPlayer from 'react-player/youtube'



const MyRate = styled(Rate)`
font-size: 17px;
`

interface IProps {
    boardId?                 : string
    fetchWriter?             : string | number
    fetchTitle?              : string | number
    fetchContents?           : string | number
    fetchYoutubeUrl?         : string
    onClickDelete            : () => void
    onClickGoBackList        : () => void
    onClickRegComments       : () => void
    onChangeCommentsWriter   : () => void
    onChangeCommentsPassword : () => void
    onChangeCommentsArea     : () => void
    cmts?                    : any
    onClickDeleteComments    : () => void
    handleChange             : () => void
    onChangeRate             : () => void
    starValue?               : number
    fetchAddress             : string
    fetchAddressDetail       : string
    fetchZoneCode            : string
    onClickLike              : () => void
    onClickDisLike           : () => void
    fetchLikeCount           : number
    fetchDisLikeCount        : number
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
                        <S.BoardContent value={props.fetchContents} readOnly/>
                    </S.BoardContentWrapper>

                     <S.AddressWrapper>
                        <div>주소</div>
                        <S.SubAddressWrapper>
                            <S.FormTitle>{props.fetchZoneCode}</S.FormTitle>
                            <S.FormTitle>{props.fetchAddress}</S.FormTitle>
                            <S.FormTitle>{props.fetchAddressDetail}</S.FormTitle>
                        </S.SubAddressWrapper>
                    </S.AddressWrapper>

                    <S.UtubeWrapper>
                        <S.YoutubeTitle> - Youtube Link - </S.YoutubeTitle>
                        <S.Youtube>
                            <S.MyYoutube url={props.fetchYoutubeUrl} width={800} height={500}/>
                        </S.Youtube>
                    </S.UtubeWrapper>

                    <S.LikeDisLikeWrapper>
                        <S.LikeWrapper>
                            <S.LikeImg src="/images/Like.svg" onClick={props.onClickLike}/>
                            <S.LikeCounter>{props.fetchLikeCount}</S.LikeCounter>
                        </S.LikeWrapper>
                        <S.DisLikeWrapper>
                            <S.DisLikeImg src="/images/DisLike.svg" onClick={props.onClickDisLike}/>
                            <S.DisLikeCounter>{props.fetchDisLikeCount}</S.DisLikeCounter>
                        </S.DisLikeWrapper>
                    </S.LikeDisLikeWrapper>


                    {/*<PhotoWrapper>
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

                        {/* 댓글 타이틀 영역 */}
                        <S.BoardCommentsTitleWrapper>
                            <S.VectorImg src="/images/Vector.png"></S.VectorImg>
                            <S.BoardCommentsTitle>댓글</S.BoardCommentsTitle>
                        </S.BoardCommentsTitleWrapper>

                        {/* 댓글 작성 헤더 ( 작성자 / 비밀번호 / 별점 / 등록버튼 ) */}
                        <S.BoardCommentsWriteWrapper>
                            <S.CommentsWrapper>
                                <S.CommentsWriter   type="text" onChange={props.onChangeCommentsWriter}   placeholder="작성자"></S.CommentsWriter>
                                <S.CommentsPassword type="text" onChange={props.onChangeCommentsPassword} placeholder="비밀번호"></S.CommentsPassword>
                                <S.StarImgWrapper>
                                    {/* <Rate onChange={props.onChangeCommentsStar} value={props.starValue} /> */}
                                    <Rate onChange={props.onChangeRate} value={props.starValue} />
                                </S.StarImgWrapper>

                            </S.CommentsWrapper>
                            <S.CommentsRegBtn onClick={props.onClickRegComments}>등록하기</S.CommentsRegBtn>
                        </S.BoardCommentsWriteWrapper>

                        {/* 댓글 작성 영역 */}
                        <S.BoardCommentsWrapper>
                            <S.BoardCommentsTextarea onChange={props.onChangeCommentsArea} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.">
                            
                            </S.BoardCommentsTextarea>
                        </S.BoardCommentsWrapper>

                    </S.BoardCommentsContainer>

                    {/* 댓글 조회 리스트 영역 */}
                    {props.cmts?.fetchBoardComments.map((el,index) => (
                    <S.BoardCommentsListContainer key={el+index}>
                        <S.BoardCommentsListContainerWrapper>
                            
                            {/* 프로필 사진 */}
                            <S.profileImage src="/images/Vector.svg"></S.profileImage>
                            
                            <S.BoardCommentsListWrapper>

                                <S.BoardCommentsListHeaderWrapper>
                                    {/* 작성자 */}
                                    <S.CommentsWriterRating>
                                        <S.BoardCommentsWriter>{el.writer}</S.BoardCommentsWriter>
                                        {/* 별점 */}
                                        <MyRate value={el.rating}></MyRate>
                                    </S.CommentsWriterRating>
                                    {/* 수정/삭제버튼 */}
                                    <S.CommentsImgButtonWrapper>
                                        <S.BoardCommentsImg src="/images/Edit.svg" ></S.BoardCommentsImg>
                                        <S.BoardCommentsImg src="/images/Delete.svg" onClick={props.onClickDeleteComments} id={el._id}></S.BoardCommentsImg>
                                    </S.CommentsImgButtonWrapper>
                                </S.BoardCommentsListHeaderWrapper>

                                {/* 댓글 내용 */}
                                <S.BoardCommentsListBodyWrapper>{el.contents}</S.BoardCommentsListBodyWrapper>
                            </S.BoardCommentsListWrapper>

                        </S.BoardCommentsListContainerWrapper>
                        
                        {/* Board Comments Footer */}
                        <S.BoardCommentsListFooter>{(el.createdAt).replaceAll('-','.').split('T')[0]}</S.BoardCommentsListFooter>
                    </S.BoardCommentsListContainer>
                    ))}


            </S.Wrapper>
        </S.Container>        
    )
}
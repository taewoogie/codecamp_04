import * as S from '../../../../../styles/boards/list/index'

export default function BoardsListPresenter(props){
    return(
        <S.Wrapper>
            <S.PageTitle>베스트 게시글</S.PageTitle>
            {/* 베스트 게시글 영역 */}
            <S.BestBoardsHeadWrapper>
                {props.ad?.fetchBoardsOfTheBest.map((el,index) => (
                <S.BestBoardsWrapper>
                    <S.BestBoardsImage>Image Area</S.BestBoardsImage>
                    <S.BestBoardsInfoWrapper>
                        <S.BestBoardsInfo_title id={el._id} onClick={props.onClickBestBoardsId}>{el.title}</S.BestBoardsInfo_title>
                        <div>
                            <S.BestBoardsInfo_profile>{el.writer}</S.BestBoardsInfo_profile>
                            <S.BestBoardsInfo_CreatedAt>{(el.createdAt).replaceAll('-','.').split('T')[0]}</S.BestBoardsInfo_CreatedAt>
                        </div>
                    </S.BestBoardsInfoWrapper>
                </S.BestBoardsWrapper>
                ))}
            </S.BestBoardsHeadWrapper>

            
            {/*  검색 영역  */}
            <S.SearchAreaWrapper>
                <S.SearchBoardTitleInput type="text" placeholder="제목을 검색해주세요."/>
                <S.SearchBoardDateInput type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
                <S.SearchBtn>검색하기</S.SearchBtn>
            </S.SearchAreaWrapper>
            

            {/* 전체 게시글 영역 */}
            <S.BoardsListWrapper>
                <S.Row>
                    <S.ColumnIndexHeader>번호</S.ColumnIndexHeader>
                    <S.ColumnTitleHeader>제목</S.ColumnTitleHeader>
                    <S.ColumnWriterHeader>작성자</S.ColumnWriterHeader>
                    <S.ColumnCreatedAtHeader>날짜</S.ColumnCreatedAtHeader>
                </S.Row>

                {props.ad2?.fetchBoards.map((el , index) =>  (
                <S.Row>
                    <S.ColumnIndex>{10 - index}</S.ColumnIndex>
                    <S.ColumnTitle onClick={props.onClickColumnTitle} id={el._id}>{el.title}</S.ColumnTitle>
                    <S.ColumnWriter>{el.writer}</S.ColumnWriter>
                    <S.ColumnCreatedAt>{el.createdAt.replaceAll('-','.').split('T')[0]}</S.ColumnCreatedAt>
                </S.Row>
                ))}
            </S.BoardsListWrapper>

            {/* footer */}
            <S.FooterWrapper>
                <S.RegisterBtn onClick={props.onClickRegisterBtn}>게시물 등록하기</S.RegisterBtn>

            </S.FooterWrapper>
        </S.Wrapper>        
    )
}
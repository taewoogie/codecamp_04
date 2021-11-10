import styled from '@emotion/styled'

// Styled

// 전체 Wrapper
export const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin : 0 auto;
`
// 행
export const Row = styled.div`
width: 100%;
    display: flex;
`
export const PageTitle = styled.div`
    width: 100%;
    height: 42px;
    margin-top: 80px;
    margin-bottom: 40px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    /* Black */
    color: #000000;    
`


// ************************
//  베스트 게시글 영역 Wrapper
// ************************

//  베스트 게시글 최상단 Wrapper
export const BestBoardsHeadWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
// 베스트 게시글 Wrapper
export const BestBoardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 257px;
    /* White */
    background: #FFFFFF;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    margin-bottom: 80px;
`
// 베스트 게시글 이미지
export const BestBoardsImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 120px;
    background-color: gray;
    border-radius: 20px 20px 0px 0px;
`
// 베스트 게시글 정보 Wrapper
export const BestBoardsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px;
    border-radius: 0px 0px 20px 20px;
`
// 베스트 게시글 제목
export const BestBoardsInfo_title = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */
    /* Black */
    color: #4F4F4F;
    cursor: pointer;
    :hover {
        color: crimson;
        font-size: 19px;
    }
`
//  베스트 게시글 프로필(작성자)
export const BestBoardsInfo_profile = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    /* identical to box height */
    /* Black */
    color: #000000;
    height: 24px;
    margin-top: 20px;
`
// 베스트 게시글 좋아요
export const BestBoardsInfo_likeCount = styled.div`

`
// 베스트 게시글 작성일
export const BestBoardsInfo_CreatedAt = styled.div`
    width: 103px;
    height: 18px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    /* Gray 3 */
    color: #828282;
`


// *********************
//    검색 영역 Wrapper
// *********************

export const SearchAreaWrapper = styled.div`
    /* width: 1200px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`
// 제목 검색
export const SearchBoardTitleInput = styled.input`
    width: 776px;
    height: 52px;
    border:none;
    /* Gray 6 */
    background: #F2F2F2;
    border-radius: 10px;
    padding: 14px 16px;
`
// 날짜 검색
export const SearchBoardDateInput = styled.input`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    text-align: center;
    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height */
    color: #BDBDBD;
    width: 244px;
    height: 52px;
`
// 검색하기 버튼
export const SearchBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 16px;
    /* Black */
    background: #000000;
    border-radius: 10px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height */
    text-align: center;
    /* White */
    color: #FFFFFF;
    width: 94px;
    height: 52px;
`


// ***********************
//   전체조회 리스트 Wrapper
// ***********************

export const BoardsListWrapper = styled.div`
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 40px;
`
// 번호 헤더
export const ColumnIndexHeader = styled.div`
    width: 100px;
    height : 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
`
// 번호
export const ColumnIndex = styled.div`
    width: 100px;
    height : 50px;
    border-top: 1px solid #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    /* Gray 2 */
    color: #4F4F4F;
`
// 제목 헤더
export const ColumnTitleHeader = styled.div`
    width: 900px;
    height : 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
`
// 제목
export const ColumnTitle = styled.div`
    width: 900px;
    height : 50px;
    border-top: 1px solid #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    /* Gray 2 */
    color: #4F4F4F;

    :hover {
        color: crimson;
        font-size: 17px;
    }
`
// 작성자 헤더
export const ColumnWriterHeader = styled.div`
    width: 200px;
    height : 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
`
// 작성자
export const ColumnWriter = styled.div`
    width: 200px;
    height : 50px;
    border-top: 1px solid #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    /* Gray 2 */
    color: #4F4F4F;
`
// 날짜 헤더
export const ColumnCreatedAtHeader = styled.div`
    width: 150px;
    height : 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
`
// 날짜
export const ColumnCreatedAt = styled.div`
    width: 150px;
    height : 50px;
    border-top: 1px solid #BDBDBD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    /* Gray 2 */
    color: #4F4F4F;
`


//
// Footer Wrapper
//

export const FooterWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 40px;

`

export const RegisterBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 14px 16px;
    /* Black */
    background: #FFFFFF;
    border-radius: 10px;
    border: 1px solid #F2F2F2;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    text-align: center;
    /* White */
    color: #000000;
    width: 171px;
    height: 52px;
    cursor: pointer;
`
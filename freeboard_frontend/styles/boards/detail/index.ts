import styled from '@emotion/styled'
import { Divider } from 'antd'

// 최상위 JSX 영역
export const Container = styled.div`
    /* background-color: Lightgray; */
    margin: 60px 60px;
    width: 1200px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px gray;
    border-radius: 20px;

`
// JSX의 내용 전체 영역
export const Wrapper = styled.div`
    /* background-color: beige; */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 996px;
    /* box-shadow: 0px 0px 10px gray; */
    
`
// 페이지명
export const Title = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`

// Form Title
export const FormTitle = styled.label`
    /* background-color: grey; */
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 75px;
    border-bottom: 1px solid #BDBDBD;

`

export const TitleText = styled.div`
        margin-left: 10px;
`

// 작성자 + 비밀번호 Wrapper
export const HeaderWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
`

// 작성자 title wrapper
export const HeaderWrapper_left = styled.div`
    display: flex;
    /* background-color: red; */
    height: 100%;
    width: 100%;
    float: right;
    /* line-height: 50px; */
`

// 작성자
export const Writer = styled.input`
    /* margin-top: 10px; */
    width : 486px;
    height: 52px;
    margin-top: 10px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    padding: 14px 14px;
`

// 비밀번호 title wrapper
export const HeaderWrapper_right = styled.div`

`

// 비밀번호
export const Password = styled.input`
    margin-top: 10px;
    width : 486px;
    height: 52px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    padding: 14px 14px;
`

// 게시글 Wrapper 
export const BoardTitleWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
`

// 게시글 - 제목
export const BoardTitle = styled.input`
    width: 996px;
    height: 52px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    padding: 14px 14px;
`

// 내용 Wrapper
export const BoardContentWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
`

// 게시글 - 내용
export const BoardContent = styled.input`
    width: 996px;
    height: 480px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    padding: 14px 14px;
    
`

// 주소 Wrapper
export const AddressWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-direction: column;
    width: 100%;
    margin-bottom: 40px;
`

// 주소 우편번호 검색 Wrapper
export const MainAddressWrapper = styled.div`
    margin-bottom: 16px;
`

// 주소 - 우편번호
export const AddressNum = styled.input`
    width: 77px;
    height: 52px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #BDBDBD;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    
`

export const AddressNumSearch = styled.button`
    width : 124px;
    height: 52px;
    margin-left: 16px;
    color : white;
    background-color: #000000;

    padding: 14px 16px;

`

// 주소 - 상세 주소 Wrapper 
export const SubAddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* margin-bottom: 30px; */
`

// 주소 - 상세주소
export const AddressSub = styled.input`
    width: 996px;
    height: 52px;
    margin-bottom:30px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;

    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
`
// 주소 - 상세주소
export const AddressSub2 = styled.input`
    width: 996px;
    height: 52px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
`

// 유튜브 Wrapper
export const UtubeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

// 유튜브 링크
export const UtubeLink = styled.input`
    width: 996px;
    height: 46px;
    margin-bottom: 40px;

    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    padding: 14px 14px;
`

// 사진첨부
export const PhotoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

// 사진첨부 List Wrapper
export const PhotoListWrapper = styled.div`
    display:flex;
    width: 100%;
    margin-bottom : 40px;
`

// 사진첨부 List
export const PhotoList = styled.div`
    background-color: #BDBDBD;;
    width : 78px;
    height: 78px;
    border : 1px solid #BDBDBD;
    margin-right : 24px;
    text-align: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 78px;


`

// 메인설정
export const MainSettingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom : 80px;
`

// 메인설정 - 선택 Wrapper
export const MainSettingItemWrapper = styled.div`

`

// 메인설정 - 선택
export const MainSettingItem = styled.input`

`

// 버튼 Wrapper
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 80px;
`
// 버튼
export const FooterBtn = styled.button`
    width: 100px;
    height: 40px;
    margin-top : 30px;
    margin-bottom : 30px;
    margin-right: 20px;
    background-color: #FFD600;
    border : none;
    border-radius: 15px;
    cursor: pointer;
    :hover{
        font-size: 15px;
        font-weight: bold;
        color : white;
    }
`
// 에러 메세지
export const ErrMessage = styled.div`
    color: red;
    font-size: 13px;
    margin-left: 5px;
`
export const Line = styled.div`
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 40px;
`
// ******************
//      댓글 영역
// ******************
export const BoardCommentsContainer = styled.div`
    width: 996px;
    /* margin-bottom: 40px; */
`
// 댓글 타이틀 영역
export const BoardCommentsWriteWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: space-between;
`
// 댓글 아이콘
export const VectorImg = styled.img`
    margin-right: 14px;
    width: 27px;
    height: 25px;
`
// 댓글 타이틀
export const BoardCommentsTitle = styled.span`
    width: 35px;
    height: 27px;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    /* Black */
    color: #000000;    
`
// wrapper
export const CommentsWrapper = styled.div`
    display: flex;
`
// 작성자
export const CommentsWriter = styled.input`
    width: 180px;
    height: 52px;
    margin-right: 25px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    /* Gray 3 */
    color: #828282;
    padding-left: 15px;
    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
    :focus{
        outline: none;
    }
`
// 비밀번호
export const CommentsPassword = styled.input`
    width: 180px;
    height: 52px;
    margin-right: 25px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    /* Gray 3 */
    color: #828282;
    padding-left: 15px;
    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 20px;
    :focus{
        outline: none;
    }    
`
// 별 이미지 Wrapper
export const StarImgWrapper = styled.div`
    display: flex;
    align-items: center;
`
//  별 이미지
export const StarImg = styled.img`
    margin-right: 5px;
`
// 등록하기 버튼
export const CommentsRegBtn = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    width: 100px;
    height: 52px;
    background: #000000;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    color : white;
    text-align: center;
    border-radius: 10px;
    
`

export const BoardCommentsTitleWrapper = styled.div`
    display: flex;
    margin-bottom: 20px;
`
export const BoardCommentsWrapper = styled.div`
    width: 100%;
`
// TextArea
export const BoardCommentsTextarea = styled.textarea`
    width : 100%;
    height: 161px;
    /* White */
    background: #FFFFFF;
    /* Gray 4 */
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 15px 15px;
    font-size: 15px;
    max-width: 996px;
    margin-bottom: 20px;
    :focus{
        outline: none;
    }
`

// *******************
//    댓글 리스트 조회 
// *******************
export const BoardCommentsListContainer = styled.div`
    background-color: #FFFFFF;
    width: 996px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #BDBDBD;
    box-sizing: border-box;
    padding: 20px 20px;
    /* margin-bottom: 50px; */
`
// 댓글 위 영역 ( 프로필 / 작성자 / 별점 / 버튼 / 내용 )
export const BoardCommentsListContainerWrapper = styled.div`
    display: flex;
    /* background-color: thistle; */
    height: 100px;
`
// 댓글 리스트 Wrapper
export const BoardCommentsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
// 댓글 프로필 사진
export const profileImage = styled.img`
width: 60px;
height: 60px;
padding : 5px 5px;
margin-top: 15px;
`
// 댓글 ( 작성자 / 등급 / 수정 / 삭제 버튼 ) 영역
export const BoardCommentsListHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    height: 30px;
    margin-top: 10px;
    /* background-color: yellow; */
    padding : 5px 5px;
`
export const CommentsWriterRating = styled.div`
    display: flex;

`
export const CommentsImgButtonWrapper = styled.div`

`
export const BoardCommentsWriterWrapper = styled.div`
    /* width: 100%; */
`
// 댓글 작성자
export const BoardCommentsWriter = styled.div`
    /* background-color: tomato; */
    /* width: 100%; */
    height: 24px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    /* identical to box height */
    /* Black */
    color: #000000;
    align-items: center;
    margin-right: 10px;
`
export const BoardCommentsImg = styled.img`
    /* background-color: yellow; */
    margin : 0px 0px 0px 20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
// 댓글 내용 Wrapper
export const BoardCommentsListBodyWrapper = styled.div`
    /* background-color: tomato; */
    margin-left: 15px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */
    /* Gray 2 */
    color: #4F4F4F;
    padding : 5px 5px;
`
// 댓글 내용
export const BoardCommentsBody = styled.div`
    width: 100%;
    margin-top: 5px;
`
// 댓글 등록일
export const BoardCommentsListFooter = styled.div`
    width: 60px;
    height: 20px;
    /* margin-top: 20px; */
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    /* identical to box height */
    /* Gray 4 */
    color: #BDBDBD;
    margin-left: 80px;
`





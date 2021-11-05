import styled from '@emotion/styled'

// 최상위 JSX 영역
export const Container = styled.div`
    /* background-color: black; */
    margin: 60px 60px;
    width: 1200px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 10px gray;
    border-radius: 20px;
`
// JSX의 내용 전체 영역
export const Wrapper = styled.div`
    /* background-color: blueviolet; */
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
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
`

// 작성자 + 비밀번호 Wrapper
export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
`

// 작성자 title wrapper
export const HeaderWrapper_left = styled.div`

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

// 등록하기 Wrapper
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

// 등록하기 버튼
export const FooterBtn = styled.button`
    width: 179px;
    height: 52px;
    margin-bottom : 100px;
    background-color: #FFD600;
    border : 0px;
    cursor: pointer;
    
`

// 에러 메세지
export const ErrMessage = styled.div`
    color: red;
    font-size: 13px;
    margin-left: 5px;
`
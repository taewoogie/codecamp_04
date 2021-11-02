import styled from '@emotion/styled'
// height : 1095px;
// JSX 전체 영역
export const Container = styled.div`
    /* background-color: purple; */
`
// 
export const Wrapper = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
`
// Header
export const Header = styled.div`
    /* background-color: yellow; */
    width : 640px;
    display: flex;
    flex-direction: column;
    /* margin: 40px 40px; */
    border-bottom: 1px solid #cacaca;
    /* margin-bottom: 30px; */
`

// 돋보기 
export const SearchIcon = styled.img`
    /* float: right; */
    /* background-color: tomato; */
    margin-left: 560px;
    margin-right: 20px;
    margin-top: 36px;
    width: 32px;
    height: 32px;
`

// Header - 내정보
export const MyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    /* background-color: thistle; */
    margin-top: 31px;
    margin-bottom: 52px;
    padding: 0px 50px;
`
// 마이
export const My = styled.div`
    width: 71px;
    height: 43px;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 60px;
`
// 프로필 Wrapper
export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
`
// 프로필 사진
export const ProfilePhoto = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`
// 프로필 이름
export const ProfileName = styled.div`
    width: 64px;
    height: 26px;
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 30px;
    letter-spacing: -0.8px;
    color: #1f1f1f;
`
// 화살표
export const ProfileArrow = styled.img`
    width: 28px;
    height: 28px;
`
// 카테고리 Wrapper
export const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;

`
// Tab
export const Tab = styled.div`
    width: 112px;
    height: 32px;
    font-family: SpoqaHanSans;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    color: #cacaca;
`
// FAQ
export const Faq = styled.div`
    width: 60px;
    height: 32px;
    font-family: SpoqaHanSans;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    color: #ff1b6d;
    border-bottom: 2px solid #ff1b6d;
`

// Body
export const Body = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
`
// BodyHeader
export const BodyHeader = styled.div`
/* background-color: silver; */
    width : 640px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #cacaca;
`
// 질문번호 + 질문주제 + 아이콘 Wrapper
export const QWrapper = styled.div`
    /* background-color: silver; */
    display: flex;
    justify-content: space-between;
    margin: 20px 50px;

`
// 질문번호
export const QNum = styled.div`
    font-family: SpoqaHanSans;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color : #adadad;
    margin-bottom: 14px;
`
// 질문 주제
export const QSubject = styled.div`
    font-family: SpoqaHanSans;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    color: #444444;
`
// footer
export const FooterWrapper = styled.div`
    width : 100%;
    display: flex;
    flex-direction: column;
`

// footerCategory
export const FooterCategory = styled.div`
    /* background-color: silver; */
    width:500px ;
    display: flex;
    justify-content: space-between;
    margin: 20px 50px;
`

// export const CategoryIcon
export const CategoryIcon = styled.img`
    width: 58px;
    height: 58px;
`

// CategoryTitleWrapper
export const CategoryTitleWrapper = styled.div`
    /* width: 90px; */
    height: 20px;
    text-align: center;

`

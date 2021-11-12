import {Container,
        Wrapper, 
        Header, 
        SearchIcon, 
        MyInfo, 
        My, 
        ProfileWrapper,
        ProfilePhoto,
        ProfileName,
        ProfileArrow,
        CategoryWrapper,
        Tab,
        Faq,
        QWrapper,
        QNum,
        QSubject,
        Body,
        BodyHeader,
        FooterWrapper,
        FooterCategory,
        CategoryIcon,
        // QNumSubWrapper

    } from "../../../styles/01-faq"

export default function indexPage () {

return(
        <Container>
            <Wrapper>
                <Header>
                    <SearchIcon src="/images/ic-58-main-search-black.png" />
                    <MyInfo>
                        <My>
                            마이
                        </My>
                        <ProfileWrapper>
                            <ProfilePhoto src="/images/img-60-profile-image.png"></ProfilePhoto>
                            <ProfileName>임정아</ProfileName>
                            <ProfileArrow src="/images/ic-28-arrow.png"></ProfileArrow>
                        </ProfileWrapper>
                    </MyInfo>
                    <CategoryWrapper>
                        <Tab>공지사항</Tab>
                        <Tab>이벤트</Tab>
                        <Faq>FAQ</Faq>
                        <Tab>QA</Tab>
                    </CategoryWrapper>
                </Header>

                <Body>
                    <BodyHeader>
                        <QWrapper>
                            <div>
                                <QNum>Q.01</QNum>
                                <QSubject>리뷰작성은 어떻게 하나요?</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>

                        <QWrapper>
                            <div>
                                <QNum>Q.02</QNum>
                                <QSubject>리뷰 수정/삭제는 어떻게 하나요?</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>
                        <QWrapper>
                            <div>
                                <QNum>Q.03</QNum>
                                <QSubject>아이디/비밀번호를 잊어버렸어요.</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>
                        <QWrapper>
                            <div>
                                <QNum>Q.04</QNum>
                                <QSubject>회원탈퇴를 하고싶어요.</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>
                        <QWrapper>
                            <div>
                                <QNum>Q.05</QNum>
                                <QSubject>출발지 설정은 어떻게 하나요?</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>
                        <QWrapper>
                            <div>
                                <QNum>Q.06</QNum>
                                <QSubject>비밀번호를 변경하고 싶어요.</QSubject>
                            </div>
                            <img src="/images/ic-70-arrow-right.png"></img>
                        </QWrapper>
                    </BodyHeader>
                </Body>

                <FooterWrapper>
                    <FooterCategory>
                        <CategoryIcon src="/images/ic-58-main-home-unselected.png"></CategoryIcon>
                        
                        <CategoryIcon src="/images/ic-58-main-location-unselected.png"></CategoryIcon>
                        <CategoryIcon src="/images/ic-58-main-like-unselected.png"></CategoryIcon>
                        <CategoryIcon src="/images/ic-58-main-my-selected.png"></CategoryIcon>

                    </FooterCategory>
                </FooterWrapper>
            </Wrapper>
        </Container>
    )
}
import {MyDiv, MyInput, MyWrapper, MyInfo} from '../../styles/01-01-emotion'

export default function EmotionPage() {
    
    
    
    
    // 기준으로 위는 js 작성
    // 아래로는 jsx(React HTML) 작성
    return(
        // div로 감싸지 않고 그대로 내보내고 싶을때 (Pragment)
        <MyWrapper>
            <MyDiv>로그인</MyDiv>
            <MyInfo>
                아이디
                <MyInput type="text" /><br />
                비밀번호
                <MyInput type="password" /><br />
                나의 이미지 :
                <img src="/images/lotto.png" />
            </MyInfo>

        </MyWrapper>

    )
}
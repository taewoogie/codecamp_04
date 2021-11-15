import {LikeOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

// Emotion 이랑 외부 라이브러리 같이 사용 시 font 로 css 먹인다
const MyIcon = styled(LikeOutlined)`
font-size: 50px;
color : blue;
`

export default function LibraryIconPage() {
       
    return(
        <MyIcon id="aaa" />
    )
}
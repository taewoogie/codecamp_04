import ReactPlayer from 'react-player/youtube'
import styled from '@emotion/styled'

// const MyYoutube = styled(ReactPlayer)`
//     border: 10px solid yellow;
// `

export default function LibraryYoutubePage() {

    return(
        // url에 원하는 주소로 변경
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={500} height={500}/>
    )
    
}
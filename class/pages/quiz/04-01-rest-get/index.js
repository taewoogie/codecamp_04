import axios from 'axios'
import {useState} from 'react'

export default function restGetPage(){
    const [state, setstate] = useState("")

    // 화살표 함수형식
    const Request = async () => {
        const Req = await axios.get('https://koreanjson.com/users');
        console.log(Req);
        // console.log(Req.data.title)

        setstate(Req.data.title)
    }

    // 일반 함수형식
    // async function Request() {
    //     const Req = await axios.get('https://koreanjson.com/users');
    //     console.log(Req);
    //     console.log(Req.data.title);

    //     setstate(Req.data.title);
    // }

    return (
        <>
            <div>{state}</div>
            <button onClick={Request}>REST-API 요청하기</button>
        </>
    )
}
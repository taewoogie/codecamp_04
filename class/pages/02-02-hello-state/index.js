import { useState } from 'react'

export default function helloStatePage() {
    
    const [ abc, setAbc ] = useState("안녕하세요");
    
    function buttonClick(){
        setAbc("반갑습니다요");
    }
    
    return(
        <>
            <div>{abc}</div>

            <button onClick={buttonClick}>버튼클릭</button>
        </>
    )
}
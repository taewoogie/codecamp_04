import { useState } from 'react'

export default function GetTokenStatePage() {
    
    const [ token, setToken ] = useState("000000");
    

    function buttonClick(){
        token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        setToken(token);
    }
    
    return(
        <>
            <div>{token}</div>

            <button onClick={buttonClick}>인증번호전송</button>
        </>
    )
}
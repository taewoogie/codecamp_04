import { useState } from "react"

export default function SignupStatePage(){

    const [ email , setEmail ] = useState("");
    const [ emailErr , setEmailErr ] = useState("");
    const [ password , setPassword ] = useState("");

    const signup = () => {
        console.log('email : ' , email);
        console.log('password : ' , password);
        
        if(email.includes("@") === false) setEmailErr("이메일 형식이 잘못되었습니다.")

    }

    const aaa = (event) => {
        // event.target // <input type="text" onChange={aaa} /> 태그 전체를 가져옴
        setEmail(event.target.value); // 값이 바뀔 때마다 setEmail로 값 변경 됨
    }

    const bbb = (event) => {
        setPassword(event.target.value)
    }

    return(
        <div>
            이메일 입력 : <input type="text" onChange={aaa} /><br />
            <div>{emailErr}</div>
            비밀번호 입력 : <input type="password" onChange={bbb} /><br />
            <button onClick={signup}>가입하기</button>
        </div>
    )
}
import { useState } from "react"
import { ConfirmTitle } from "../../../styles/02-03-signup-state";

export default function SignupStatePage(){

    const [ email , setEmail ] = useState("");
    const [ emailErr , setEmailErr ] = useState("");
    const [ password , setPassword ] = useState("");
    const [ passwordConfirm , setPasswordConfirm ] = useState("");
    const [ passwordErr , setPasswordErr ] = useState("");

    const aaa = (event) => {
        // event.target // <input type="text" onChange={aaa} /> 태그 전체를 가져옴
        setEmail(event.target.value); // 값이 바뀔 때마다 setEmail로 값 변경 됨
    }

    const bbb = (event) => {
        setPassword(event.target.value)
    }

    const ccc = (event) => {
        setPasswordConfirm(event.target.value)
    }

    const signup = () => {
        console.log('email : ' , email);
        console.log('password : ' , password);
        console.log('passwordConfirm : ', passwordConfirm);
        
        // 이메일 유효성 검사
        if(email.includes("@") === false) setEmailErr("이메일 형식이 잘못되었습니다.");
        else setEmailErr("");
        

        // 비밀번호 유효성 검사
        if(password !== passwordConfirm) setPasswordErr("비밀번호가 다르게 입력되었습니다.");
        else setPasswordErr("");

        // 
        if(!email.length === 0 && !password.length) alert("가입성공!")

    }



    return(
        <div>
            이메일 입력 : <input type="text" onChange={aaa} /><br />
            <ConfirmTitle>{emailErr}</ConfirmTitle>
            비밀번호 입력 : <input type="password" onChange={bbb} /><br />
            비밀번호 확인 : <input type="password" onChange={ccc} /><br />
            <ConfirmTitle>{passwordErr}</ConfirmTitle> <br />
            <button onClick={signup}>가입하기</button>
        </div>
    )
}
export default function GetTokenLetPage(){

    function buttonClick(){
        
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        
        // document.getElementById("token").innerText
              document.getElementById("token").innerText = token;
    }

    return(
        <>
            <div id="token">000000</div>
            <button onClick={buttonClick}>인증번호전송</button>
        </>
    )
}
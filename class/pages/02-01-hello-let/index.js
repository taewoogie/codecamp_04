export default function helloLetPage(){

    function buttonClick(){
        
        document.getElementById("abc").innerText = "반갑습니다"
        
    }

    return(
        <>
        {/* 
        
            강제로 입력 하는 (id값) 값은 "" 로 감싸고
            스크립트 부분은 { } 로 감싸야 한다.
        
        */}

            <div id="abc">안녕하세요</div>

            <button onClick={buttonClick}>버튼클릭</button>
        </>
    )
}
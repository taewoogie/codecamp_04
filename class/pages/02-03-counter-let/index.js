export default function CounterLetPage(){

    function buttonClick(){
        const count = Number(document.getElementById("abc").innerText) + 1
              document.getElementById("abc").innerText = count;
    }

    return(
        <>
            <div id="abc">0</div>
            <button onClick={buttonClick}>카운트 증가</button>
        </>
    )
}
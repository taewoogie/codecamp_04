import { useState } from "react"

export default function StatdPrevPage() {

    const [Count,setCount] = useState(0);

    const onClickBtn = () => {
        setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
    }
    const onClickBtn2 = () => {
        setCount(0);
    }


    return(
        <>
            <div>현재 카운트 : {Count}</div>
            <button onClick={onClickBtn}>카운트 올리기</button>
            <button onClick={onClickBtn2}>초기화</button>
        </>

    )
    
}
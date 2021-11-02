import { useState } from 'react'

export default function CounterStatePage() {
    
    const [ abc, setAbc ] = useState(0);
    
    function buttonClick(){
        setAbc(abc+1);
    }
    
    return(
        <>
            <div>{abc}</div>

            <button onClick={buttonClick}>카운터 증가</button>
        </>
    )
}
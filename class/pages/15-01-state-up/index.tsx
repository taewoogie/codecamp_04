import { useState } from "react";
import Child01 from "../../src/components/units/stateup/Child01";
import Child02 from "../../src/components/units/stateup/Child02";



export default function StateUpPage() {
    
    const [ count , setCount ] = useState(0);
    
    const onClickCounter = () => {
        setCount((prev) => prev+1);
    }

    return (
        <>
            <Child01 count = {count}
                     onClickCounter = {onClickCounter}
            />
            <div>==========================</div>
            <Child02 count = {count}
                     onClickCounter = {onClickCounter}
            />
            {/* <button onClick={onClickCounter}>카운트 올리기</button> */}
        </>
    )
    
}
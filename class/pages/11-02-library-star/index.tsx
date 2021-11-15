import { useState } from "react";
import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function LibraryStarPage() {

    const [value, setValue] = useState(0)

    function handleChange(value:number){
        setValue(value);
    }


    return(
        <span>
            <Rate onChange={handleChange} value={value} />
            {/* {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''} */}
        </span>       
    )
}
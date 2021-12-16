import { useState } from "react";

const HashTag = () => {
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUpHashTag = (event) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHashTag = (index) => () => {
    hashArr.splice(index, 1);
    setHashArr([...hashArr]);
  };
  return (
    <>
      <div>
        <div>
          {hashArr.map((el, index) => (
            <span key={index} onClick={deleteHashTag(index)}>
              {el}
            </span>
          ))}
        </div>
        <input type="text" onKeyUp={onKeyUpHashTag} />
      </div>
    </>
  );
};
export default HashTag;

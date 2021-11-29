import { createContext } from "react";
import MyBoardWriteContainer from "../../src/components/units/21-context-api/MyBoardWrite.container";

// context는 만들때 사용
export const MyContext = createContext(null);
export default function ContextApiPage() {
  const MyValue = {
    isEdit: true,
  };

  return (
    <MyContext.Provider value={MyValue}>
      <MyBoardWriteContainer />
    </MyContext.Provider>
  );
}

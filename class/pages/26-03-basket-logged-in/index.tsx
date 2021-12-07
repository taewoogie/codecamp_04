import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

export default function BasketLoggedInPage() {
  const [state, setState] = useState<IBoard[]>([]);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("basket") || "[]"));
  }, []);

  return (
    <>
      <h1>비회원으로 담은 나만의 장바구니</h1>
      {state?.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </>
  );
}

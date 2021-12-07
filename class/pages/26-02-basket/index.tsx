import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el) => () => {
    // console.log(el);

    // 첫 실행 시 빈 배열에서 객체를 문자열로 치환 후 배열에 넣기 때문에
    // 두번째 실행 시 문자열 객체를 본래 객체 형태로 변환 해줘야 함
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]"); // 예외 처리
    // const baskets = JSON.parse("[]"); // 예외 처리

    // 이미 담았는지 체크
    let isExists = false;
    baskets.forEach((basketEl) => {
      if (el._id === basketEl._id) isExists = true;
    });

    if (isExists) {
      alert("이미 장바구니에 담겨있습니다");
      return;
    }

    const { __typename, ...rest } = el;
    baskets.push(rest);

    localStorage.setItem("basket", JSON.stringify(baskets));
  };

  const onClickLogin = () => {
    alert("로그인에 성공하였습니다.");
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    if (baskets.length) {
      const result = confirm("장바구니에 담은 상품이 있습니다. 이동할까요?");
      if (result) router.push("26-03-basket-logged-in");
    }
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니</button>
        </div>
      ))}
      <button onClick={onClickLogin}>로그인 하기</button>
    </>
  );
}

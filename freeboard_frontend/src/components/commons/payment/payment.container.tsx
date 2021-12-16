import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import router from "next/router";
import { IQuery } from "../../../commons/types/generated/types";
import PaymentUI from "./payment.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGEDIN,
} from "./payment.queries";

export default function Payment() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );

  const { data: fetchUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGEDIN);

  console.log(fetchUser);

  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능

    IMP.init("imp49910675"); // Example: imp61778540

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100, //props.data.fetchUseditem.price
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          //   createPointTransactionsOfLoading 뮤테이션 실행하기 (ImpUid 파라미터로 넘기기!)
          try {
            const result = await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            console.log("결제성공!");
            console.log(result);
            Modal.success({ content: "결제 되었습니다. 감사합니다." });
            router.push("/product");
          } catch (error) {
            Modal.error({ content: "결제 실패 했습니다." });
            if (error instanceof Error) console.log(error.message);
          }
        } else {
          // 결제 실패 시 로직
          console.log(rsp);
        }
      }
    );
  };
  return <PaymentUI onClickPayment={onClickPayment} />;
}

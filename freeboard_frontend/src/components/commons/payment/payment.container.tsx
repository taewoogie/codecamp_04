import PaymentUI from "./payment.presenter";

export default function Payment(props) {
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
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          //   createPointTransactionsOfLoading 뮤테이션 실행하기 (ImpUid 파라미터로 넘기기!)
        } else {
          // 결제 실패 시 로직
          console.log(rsp);
        }
      }
    );
  };
  return <PaymentUI onClickPayment={onClickPayment} />;
}

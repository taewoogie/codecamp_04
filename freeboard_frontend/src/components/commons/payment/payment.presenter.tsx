import Head from "next/head";

export default function PaymentUI(props) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>
        {/* 결제금액 : <input type="text" /> */}
        <button onClick={props.onClickPayment}>결제하기</button>
      </div>
    </>
  );
}

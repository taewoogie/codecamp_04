import "react-quill/dist/quill.snow.css";
import { Title } from "./ProductWrite.styles";
import { FormValues } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import Button01 from "../../../commons/buttons/01/Button01";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: FormValues) {
  return (
    <>
      <Title>Product Register Page</Title>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        상품명 : <input type="text" {...props.register("name")} />
        <div>{props.formState.errors.name?.message}</div>
        <br />
        한줄요약 : <input type="text" {...props.register("remarks")} />
        <div>{props.formState.errors.remarks?.message}</div>
        <br />
        판매가격 : <input type="text" {...props.register("price")} />
        <div>{props.formState.errors.price?.message}</div>
        <br />
        {/* 상품설명 : <input type="text" {...props.register("contents")} /> */}
        {/* <br /> */}
        상품설명 :<ReactQuill onChange={props.handleChange} />
        <br />
        <button isValid={props.formState.isValid}>등록하기</button>
      </form>
    </>
  );
}

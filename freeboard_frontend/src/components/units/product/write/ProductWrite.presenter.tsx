import "react-quill/dist/quill.snow.css";
import { Title } from "./ProductWrite.styles";
import { FormValues } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import DOMPurify from "dompurify";
import {
  Address,
  InputWrapper,
  Label,
  SearchButton,
  Zipcode,
  ZipcodeWrapper,
} from "../../board/write/BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { getDefaultValues } from "@apollo/client/utilities";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: FormValues) {
  console.log("<<<< ProductUpdateWritePresenter - props.data >>>>");
  console.log(props.data?.fetchUseditem.tags);
  return (
    <>
      {props.isOpen && (
        <Modal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <div>
        <Title>Product {props.isEdit ? "Update" : "Register"} Page</Title>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          상품명 :
          <input
            type="text"
            {...props.register("name")}
            defaultValue={props.data?.fetchUseditem.name}
          />
          <div>{props.formState.errors.name?.message}</div>
          <br />
          한줄요약 :
          <input
            type="text"
            {...props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks}
          />
          <div>{props.formState.errors.remarks?.message}</div>
          <br />
          판매가격 :
          <input
            type="text"
            {...props.register("price")}
            defaultValue={props.data?.fetchUseditem.price}
          />
          <div>{props.formState.errors.price?.message}</div>
          <br />
          상품설명 :
          <ReactQuill
            onChange={props.handleChange}
            value={
              props.getValue("contents") ||
              props.data?.fetchUseditem.contents ||
              ""
            }
          />
          <br />
          태그입력:
          <input
            type="text"
            {...props.register("tags")}
            // defalutValue={props.data?.fetchUseditem.tags}
            defalutValue={props.data?.fetchUseditem.tags}
          />
          <br />
          <InputWrapper>
            <Label>주소</Label>
            <ZipcodeWrapper>
              <Zipcode
                readOnly
                value={
                  props.zipcode ||
                  props.data?.fetchUseditem.useditemAddress?.zipcode ||
                  ""
                }
              />
              <SearchButton onClick={props.onClickAddressSearch}>
                우편번호 검색
              </SearchButton>
            </ZipcodeWrapper>
            <Address
              readOnly
              value={
                props.address ||
                props.data?.fetchUseditem.useditemAddress?.address ||
                ""
              }
            />
            <Address
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchUseditem.useditemAddress?.addressDetail || ""
              }
            />
          </InputWrapper>
          <button
            isValid={props.formState.isValid}
            // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </button>
        </form>
      </div>
    </>
  );
}

import "react-quill/dist/quill.snow.css";
import { Title } from "./ProductWrite.styles";
import { FormValues } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import {
  ImageWrapper,
  Label,
  UploadImage,
} from "../../board/write/BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: FormValues) {
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
            placeholder="Product Name"
            defaultValue={props.isEdit && props.data?.fetchUseditem.name}
            {...props.register("name")}
          />
          <div>{props.formState.errors.name?.message}</div>
          <br />
          한줄요약 :
          <input
            type="text"
            placeholder="Product Remarks"
            defaultValue={props.isEdit && props.data?.fetchUseditem.remarks}
            {...props.register("remarks")}
          />
          <div>{props.formState.errors.remarks?.message}</div>
          <br />
          판매가격 :
          <input
            type="number"
            placeholder="Price"
            defaultValue={props.isEdit && props.data?.fetchUseditem.price}
            {...props.register("price")}
          />
          <div>{props.formState.errors.price?.message}</div>
          <br />
          태그 :
          {props.isEdit ? (
            <>
              <div>{props.data?.fetchUseditem.tags}</div>
            </>
          ) : (
            <div>
              {props.hashArr?.map((el, index) => (
                <span key={index} onClick={props.deleteHashTag(index)}>
                  {el}
                </span>
              ))}
              <input type="text" onKeyUp={props.onKeyUpHashTag} />
            </div>
          )}
          <br />
          상품설명 :
          {props.isEdit ? (
            <ReactQuill
              onChange={props.handleChange}
              value={
                props.getValue("contents") ||
                props.data?.fetchUseditem.contents ||
                ""
              }
            />
          ) : (
            <ReactQuill onChange={props.handleChange} />
          )}
          <ImageWrapper>
            <Label>사진첨부</Label>
            <UploadImage>
              {props.fileUrls.map((el, index) => (
                <Uploads01
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
            </UploadImage>
          </ImageWrapper>
          <button type="button" onClick={props.onClickMoveToDetail}>
            취소하기
          </button>
          <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
        </form>
      </div>
    </>
  );
}

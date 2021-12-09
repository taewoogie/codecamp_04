import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM } from "./ProductWrite.queries";
import { FormValues } from "./ProductWrite.types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./ProductWrite.validations";
import { ChangeEvent, useState } from "react";

export default function ProductWrite(props) {
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // const [lat, setLat] = useState("");
  // const [lng, setLng] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const { handleSubmit, register, setValue, getValues, trigger, formState } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  }
  function handleOk() {
    setIsOpen((prev) => !prev);
  }
  function handleCancel() {
    setIsOpen((prev) => !prev);
  }

  // 등록하기
  const onClickSubmit = async (data: FormValues) => {
    // createUsedItem 요청
    try {
      console.log(data);
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: data.tags,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      // 등록 완료 후 상세페이지로 이동!!
      console.log(result);
      Modal.success({ content: "상품 등록에 성공했습니다! " });
      router.push(`/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // 수정하기
  const onClickUpdate = async () => {
    console.log("수정");
    console.log(zipcode);
  };

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      // 수정 시 edit index에서 fetchUseditem 조회 해 온 데이터
      data={props.data}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      getValue={getValues}
      formState={formState}
      handleChange={handleChange}
      // 사진
      fileUrls={fileUrls}
      // 주소
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      // 모달
      isOpen={isOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
    />
  );
}

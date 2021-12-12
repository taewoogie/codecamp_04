import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ProductWrite.queries";
import { FormValues } from "./ProductWrite.types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./ProductWrite.validations";
import { ChangeEvent, useEffect, useState } from "react";

interface IProductWriteProps {
  isEdit: boolean;
  data: any;
}
export default function ProductWrite(props: IProductWriteProps) {
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

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USEDITEM);

  const { handleSubmit, register, setValue, getValues, trigger, formState } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const handleChange = (value: string) => {
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

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  const onClickSubmit = async (data: FormValues) => {
    // createUsedItem 요청

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
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
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 수정하기
  const onClickUpdate = async (data: FormValues) => {
    const updateUseditemInput: IUpdateUseditemInput = {
      name: data.name,
      remarks: data.remarks,
      price: data.price,
      contents: data.contents,
    };

    console.log(updateUseditemInput);

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: props.data?.fetchUseditem._id,
          updateUseditemInput,
        },
      });
      console.log(result);
      Modal.success({ content: "수정 완료!" });
      router.push(`/product/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToDetail = () => {
    router.back();
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
      onChangeFileUrls={onChangeFileUrls}
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
      // 수정
      onClickUpdate={onClickUpdate}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}

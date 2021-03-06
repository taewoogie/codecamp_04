import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./ProductWrite.queries";
import { FormValues, IProductWriteProps } from "./ProductWrite.types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./ProductWrite.validations";
import { ChangeEvent, useEffect, useState } from "react";

export default function ProductWrite(props: IProductWriteProps) {
  const router = useRouter();
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // const [lat, setLat] = useState("");
  // const [lng, setLng] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isOpen, setIsOpen] = useState(false);
  const [hashArr, setHashArr] = useState<string[]>([]);

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

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onClickAddressSearch = () => {
    setIsOpen(true);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
  };

  const handleOk = () => {
    setIsOpen((prev) => !prev);
  };
  const handleCancel = () => {
    setIsOpen((prev) => !prev);
  };

  const onKeyUpHashTag = (event) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHashTag = (index) => () => {
    hashArr.splice(index, 1);
    setHashArr([...hashArr]);
  };

  const onClickSubmit = async (data: FormValues) => {
    // createUsedItem ??????
    console.log(data);

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
            },
          },
        },
      });
      console.log(result);
      Modal.success({ content: "?????? ????????? ??????????????????! " });
      router.push(`/product/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // ????????????
  const onClickUpdate = async (data: FormValues) => {
    const updateUseditemInput: IUpdateUseditemInput = {
      name: data.name,
      remarks: data.remarks,
      price: data.price,
      contents: data.contents,
      images: fileUrls,
      tags: hashArr,
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
      Modal.success({ content: "?????? ??????!" });
      router.push(`/product/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToDetail = () => {
    router.back();
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      // ?????? ??? edit index?????? fetchUseditem ?????? ??? ??? ?????????
      data={props.data}
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      getValue={getValues}
      formState={formState}
      handleChange={handleChange}
      // ??????
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      // ??????
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      // ??????
      isOpen={isOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}
      // ??????
      onClickUpdate={onClickUpdate}
      // ????????????
      onClickMoveToDetail={onClickMoveToDetail}
      name={""}
      remarks={""}
      price={0}
      contents={""}
      // ????????????
      hashArr={hashArr}
      setHashArr={setHashArr}
      onKeyUpHashTag={onKeyUpHashTag}
      deleteHashTag={deleteHashTag}
    />
  );
}

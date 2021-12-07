import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM } from "./ProductWrite.queries";
import { FormValues } from "./ProductWrite.types";
import { useForm } from "react-hook-form";
import router, { useRouter } from "next/router";
import { Modal } from "antd";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./ProductWrite.validations";

export default function ProductWrite() {
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);

  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleChange = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);

    trigger("contents");
  };

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
          },
        },
      });
      // 등록 완료 후 상세페이지로 이동!!
      console.log(result);
      Modal.success({ content: "상품 등록에 성공했습니다! " });
      router.back();
      // result.data?.createUseditem._id
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <ProductWriteUI
      onClickSubmit={onClickSubmit}
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      formState={formState}
      handleChange={handleChange}
    />
  );
}

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import MyFormUI from "./Myform.presenter";
import { schema } from "./Myform.validations";
import { FormValues } from "./Myform.types";

export default function MyForm() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onClickBtn = (data: FormValues) => {
    // 로그인 유저 api 요청
    console.log(data);
  };
  return (
    <MyFormUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickBtn={onClickBtn}
    />
  );
}

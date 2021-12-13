import SignInIdUI from "./SigninID.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./SigninID.validations";
import { FormValues } from "./SigninID.types";
import { useMutation } from "@apollo/client";
import { FETCH_USER_LOGGEDIN, LOGIN_USER } from "./SigninID.queries";
import router from "next/router";
import { GlobalContext } from "../../../../pages/_app";
import { useContext } from "react";

export default function SignInID() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickSignIn = async (data: FormValues) => {
    console.log(data);

    try {
      // 로그인 유저 api 요청
      const result = await loginUser({
        variables: {
          email: data.Email,
          password: data.Password,
        },
      });
      // console.log("<<<<< Result >>>>>");
      // console.log(result);
      // localStorage.setItem(
      //   "accessToken",
      //   result.data?.loginUser.accessToken || ""
      // );
      // setAccessToken?.(result.data?.loginUser.accessToken || ""); // 여기서 setAccesToken 필요! (글로벌 스테이트에...)
      localStorage.setItem("refreshToken", "true");
      setAccessToken(result.data?.loginUserExample.accessToken || "");
    } catch (error) {}
    // 로그인 성공된 페이지로 이동시키기!!!
    router.push("/boards");
  };

  return (
    <SignInIdUI
      onClickSignIn={onClickSignIn}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}

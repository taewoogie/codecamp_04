import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/Input01";
import { FormValues } from "./Myform.types";

export default function MyFormUI(props: FormValues) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickBtn)}>
      이메일: <Input01 type="text" register={props.register("myEmail")} />
      {/* 이메일 : <input type="text" {...props.register("myEmail")} /> */}
      <div>{props.formState.errors.myEmail?.message}</div>
      비밀번호:
      <Input01 type="password" register={props.register("myPassword")} />
      {/* 비밀번호 : <input type="password" {...props.register("myPassword")} /> */}
      <div>{props.formState.errors.myPassword?.message}</div>
      <Button01
        type="submit"
        name="로그인하기"
        isValid={props.formState.isValid}
      />
      {/* <MyButton isValid={props.formState.isValid}>로그인 하기</MyButton> */}
      {/* button type="reset" input에 입력한 값 초기화 */}
      {/* <MyButton type="reset">초기화 하기</MyButton> */}
      {/* form tag 안에서 버튼 타입 없이 onClick 이벤트 실행 시
         버튼의 default type이 submit 이라서  submit 실행 함. 
         따라서 type="button"으로 기재 
         */}
      {/* <MyButton type="button">초기화 하기</MyButton> */}
    </form>
  );
}

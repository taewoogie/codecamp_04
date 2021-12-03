import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: string;
  myPassword: string;
}
export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  const onClickBtn = (data: FormValues) => {
    // 로그인 유저 api 요청
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickBtn)}>
      이메일 : <input type="text" {...register("myEmail")} />
      비밀번호 : <input type="password" {...register("myPassword")} />
      <button>로그인 하기</button>
    </form>
  );
}

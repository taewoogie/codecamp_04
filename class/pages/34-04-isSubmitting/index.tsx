import { ChangeEvent, useCallback, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import * as Sentry from "@sentry/nextjs";
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const inputsInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};
const IsSubmittingPage = () => {
  // const { formState } = useForm();
  // formState.isSubmitting;

  const [inputs, setInputs] = useState(inputsInit);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeInputs = useCallback(
    (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setInputs((prev) => ({
        ...prev,
        [name]: event.target.value,
      }));
    },
    []
  );

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      throw new Error("에러 강제로 발생시킴");
      // const result = await createBoard({
      //   variables: {
      //     createBoardInput: { ...inputs },
      //   },
      // });
      // console.log(result);
      // setIsSubmitting(false);
    } catch (error) {
      if (error instanceof Error) Sentry.captureEvent(error);
      console.log(error.message);
    }
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeInputs("writer")} />
      <br />
      비밀번호 : <input type="password" onChange={onChangeInputs("password")} />
      <br />
      제목 : <input type="text" onChange={onChangeInputs("title")} />
      <br />
      내용 : <input type="text" onChange={onChangeInputs("contents")} />
      <br />
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        드응로옥
      </button>
    </>
  );
};
export default IsSubmittingPage;

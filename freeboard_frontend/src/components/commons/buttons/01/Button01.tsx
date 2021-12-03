import styled from "@emotion/styled";
import { SignInConfirmBtn } from "../../../../components/units/signinID/SigninID.styles";

export interface IMyButtonProps {
  isValid: boolean;
}

export const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props: IMyButtonProps) {
  return (
    <SignInConfirmBtn type={props.type} isValid={props.isValid}>
      {props.name}
    </SignInConfirmBtn>
  );
}

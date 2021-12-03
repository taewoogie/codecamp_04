import { Input } from "../../units/signinID/SigninID.styles";

export default function Input01(props) {
  return <Input type={props.type} {...props.register} />;
}

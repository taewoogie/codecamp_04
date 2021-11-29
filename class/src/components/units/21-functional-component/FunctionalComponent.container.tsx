import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  // 기존 컴포넌트로 작성 된 부분은 함수 형태를 띄고 있다.
  return <FunctionalComponentUI count={3} />;
  //   return <>{FunctionalComponentUI({ count: 3 })}</>;
}

import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();

    useEffect(() => {
      if (!localStorage.getItem("refreshToken")) {
        alert("로그인 한 사람만 입장 가능합니다!!! 로그인을 먼저 해주세요!!");
        router.push("/signinID");
      }
    }, []);

    return <Component {...props} />;
  };

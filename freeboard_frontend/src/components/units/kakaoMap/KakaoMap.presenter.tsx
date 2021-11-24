import Head from "next/head";
import { Wrapper, WrapperTitle, Infomation, KakaoMap } from "./KakaoMap.styles";

export default function KakaoMapPresenter(props) {
  return (
    <>
      <Wrapper>
        <WrapperTitle>Woogie Map</WrapperTitle>
        <Head></Head>
        <KakaoMap
          id="map"
          style={{ width: "500px", height: "500px", borderRadius: "50%" }}
        ></KakaoMap>
        <Infomation>
          위치 정보를 제공 하는 기능으로 별도의 위치 추가 기능을 하실 수
          없습니다.
        </Infomation>
        <Infomation>
          Copyright 2021. (Woogie with Kakao) Many functions can be used without
          permission. But I can't
        </Infomation>
      </Wrapper>
    </>
  );
}

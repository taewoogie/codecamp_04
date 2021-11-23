import Head from "next/head";
import { Wrapper, WrapperTitle } from "./KakaoMap.styles";

export default function KakaoMapPresenter() {
  return (
    <>
      <Wrapper>
        <WrapperTitle>Woogie Map</WrapperTitle>
        <Head></Head>
        <div id="map" style={{ width: "1000px", height: "500px" }}></div>
      </Wrapper>
    </>
  );
}

import KakaoMapPresenter from "./KakaoMap.presenter";
import { useEffect } from "react";

export default function KakaoMapContainer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4c33ef03752164bbd0f08a2dfcc871f3&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const option = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new kakao.maps.LatLng(37.486592, 126.8973568), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new kakao.maps.Map(container, option);
      });
    };
  }, []);

  return <KakaoMapPresenter />;
}

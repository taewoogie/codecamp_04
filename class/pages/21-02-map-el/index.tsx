export default function MapElPage() {
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el => ", el);
  //     console.log("index =>", index);
  //     // map을 사용 시 리턴이 항상 들어와야함
  //     return "";
  //   });

  //   1. 기본방법( 화살표 함수 )
  //   ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log("el => ", el);
  //     console.log("index =>", index);
  //   });

  //    2. 기본방법 ( 그냥 함수 )
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el => ", el);
  //     console.log("index =>", index);
  //   });

  //  3. 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((name, index) => {
  //     console.log("el => ", name);
  //     console.log("index =>", index);
  //   });

  //  4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index => ", index);
    console.log("el =>", el);
  });

  return <> </>;
}

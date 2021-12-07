export default function BrowserStoragePage() {
  const onClickSetCookie = () => {
    document.cookie = "sc_temp=철수";
  };
  const onClickSetLocalStorage = () => {
    localStorage.setItem("sls_temp", "영희");
  };
  const onClickSetSessionStorage = () => {
    sessionStorage.setItem("sss_temp", "훈이");
  };
  const onClickGetCookie = () => {
    // "sc_temp=철수; sc_temp1=짱구".split("; ").filter(el => el.startsWith("sc_temp1="))[0].split("=")[1]
    // '짱구'
    const sc_temp = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("sc_temp1="))[0] // "sc_temp1=짱구"
      .split("=")[1]; // ["sc_temp" , "짱구"] 에서 1번 index 추출
    console.log(" < sc_temp > ");
    console.log(sc_temp);
  };
  const onClickGetLocalStorage = () => {
    const sls_temp = localStorage.getItem("sls_temp");
    console.log(" < sls_temp > ");
    console.log(sls_temp);
  };
  const onClickGetSessionStorage = () => {
    const sss_temp = sessionStorage.getItem("sss_temp");
    console.log(" < sss_temp > ");
    console.log(sss_temp);
  };

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSetLocalStorage}>로컬스토리지에 저장하기</button>
      <button onClick={onClickSetSessionStorage}>
        세션스토리지에 저장하기
      </button>
      ===================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져하기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져하기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에에 있는 값 가져하기
      </button>
    </>
  );
}

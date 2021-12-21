export function getDate(myDate) {
  const date = new Date(myDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`; // 2021-11-10
}

export function changeUrl(url) {
  return `https://storage.googleapis.com/${url}`;
}

export function changePrice(number) {
  return (
    number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"
  );
}

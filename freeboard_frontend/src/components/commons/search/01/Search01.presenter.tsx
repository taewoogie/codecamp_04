import { ISearch01UIProps } from "./Search01.types";

export default function Search01UI(props: ISearch01UIProps) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={props.onChangeSearch}
        />
      </div>
    </>
  );
}

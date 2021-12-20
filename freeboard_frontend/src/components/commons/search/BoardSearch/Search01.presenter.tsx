import { ISearch01UIProps } from "./Search01.types";
import * as S from "./Search01.styles";
export default function Search01UI(props: ISearch01UIProps) {
  return (
    <>
      <S.SearchInputWrapper>
        <S.searchInput
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={props.onChangeSearch}
        />
        <button onClick={props.onClickSearch}>검색하기</button>
      </S.SearchInputWrapper>
    </>
  );
}

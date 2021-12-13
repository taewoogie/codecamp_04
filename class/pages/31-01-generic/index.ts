// 1. 문자
function getString(arg: string): string {
  return arg;
}

const result1 = getString("태욱왕자");

// 2. 숫자
function getNumber(arg: number): number {
  return arg;
}

const result2 = getNumber(8);

// 3. 모두 (any)
function getAny(arg: any): any {
  return arg;
}

const result31 = getAny(8);
const result32 = getAny("안녕하세요");
const result33 = getAny(true);

// 4. 모두(generic)
function getGeneric<MyTpye>(arg: MyTpye): MyTpye {
  return arg;
}

const result41 = getGeneric(8);
const result42 = getGeneric("안녕하세요 태욱왕자님!");
const result43 = getGeneric(true);

// 5. 모두(any) - 응용
function getReverse(arg1: any, arg2: any, arg3: any): any[] {
  return [arg3, arg2, arg1];
}
const result51 = getReverse("태욱", "뚜벅초", 11);
const result52 = getReverse("은국", "100초", 12);
const result53 = getReverse("한솔", "향초", 13);

// 6. 모두(generic) - 응용 & 축약
// prettier-ignore
function getReverseType<T,U,V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result61 = getReverseType("태욱", "뚜벅초", 11);
const result62 = getReverseType("은국", "100초", 12);
const result63 = getReverseType(13, 200, "스위트캔디향초");

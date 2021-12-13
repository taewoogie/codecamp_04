// prettier-ignore
// =============================
// =============================
// 클로저(함수선언식) - 기초
function firstFunction1(firArg: string) {
  return function secondFunction(secArg: number): [string, number] {
    return [firArg, secArg];
  };
}
const resultClosure1 = firstFunction1("우기")(20);

// =============================
// 클로저(함수선언식) - 기초(any)
// =============================
function firstFunction2(firArg: any) {
  return function secondFunction2(secArg: any): [any, any] {
    return [firArg, secArg];
  };
}
const resultClosure2 = firstFunction2("구기")(21);

// =============================
// 클로저(함수선언식) - 기초(generic)
// =============================
function firstFunction3<T>(firArg: T) {
  return function secondFunction3<U>(secArg: U): [T, U] {
    return [firArg, secArg];
  };
}
const resultClosure3 = firstFunction3("구기")(21);

// =============================
// 클로저(화살표함수)
// =============================
// prettier-ignore
const firstArrow = <T>(firArg:T) => <U>(secArg:U): [T,U] => {
    return [firArg , secArg]
}
const resultClosure4 = firstArrow("우기")(4);

// =============================
// 클로저(화살표함수2)
// =============================
// prettier-ignore
// C: Component
// P: Props
const firstArrow2 = <C,P extends {name:string}>(component:C) => (props:P): [C,P] => {
    return [component , props]
}
const resultClosure5 = firstArrow2("Presenter")({ name: "우기" });

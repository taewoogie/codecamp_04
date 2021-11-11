export default function TypescriptPage() {

    // 문자타입 - 타입추론
    let aaa = "안녕하세요"
    aaa = 3
    
    // 문자타입
    let bbb: string;
    bbb = '반갑습니다'
    bbb = 3

    // 숫자타입
    let ccc: number = 5
    ccc = 'abcdf'

    // 배열타입
    let ddd : number[] = [1,2,3,4,5]
    let eee : string[] = ['a','b','c','d','e']
    let fff : number[] | string[] = [1,2,3,4,5,6]
                    // ㄴ유니온 타입
    fff = ['a', 'b', 'c']

    let ggg : (number | string)[] = [1,'c',2,'b']

    // 객체타입
    interface IProfile {
        name : string
        age : number | string
        school : string
    }

    let profile = {
        name : "철수",
        age  : 8,
        school : '다람쥐초등학교'
    }

    // any Script
    let abc : any = 5
    abc = ""

    return <div>타입스크립트 연습</div>
}
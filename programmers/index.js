// [1주차]

//     * 화요일
// 1. 배열 : 배열의 선언과 할당

let fruits = []

fruits.push("사과" , "바나나" , "파인애플")

// 2. 배열 : 배열의 기능

let fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

newFruits.push(fruits[fruits["length"]-1])

// 3. 객체 : 객체의 선언과 할당

let students = {
    name : "철수"
}

// 4. 객체 : 객체의 키&값 추가

const student = {
	name: "철수",
	age: 8
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이"
}

student.school = school;

//     * 수요일

// 5. 조건문 : 조건문 연습

function boolean(input1, input2) {
	if(input1 === false && input2 === false){
	    console.log("flase")
	} else {
	    console.log("true")
	}
}

// 6. 조건문 : 홀짝

function evenOdd(num) {

	if (num === 0 ) {
			console.log("Zero");
		} else if (num%2 === 1) {
			console.log("Odd");
		} else if (num%2 === 0) {
			console.log("Even");
		}
}

// 7. 조건문 : 온도

function temperature(num){
	if (num <= 18) {
	    console.log("조금 춥네요")
	} else if (num <= 23 ) {
	    console.log("날씨가 좋네요")
	} else {
	    console.log("조금 덥습니다")
	}
}

// 8. 조건문 : 며칠

function days(month) {
	if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 ) {
	    console.log("31")
	} else if(month === 2) {
	    console.log("28")
	} else {
	    console.log("30")
	}
}

//     * 목요일

// 9. 반복문 : 숫자 더하기

function sum(num) {
	let count = 0;

	for(let i=0; i<num; i++){
    count += i
	}

}

// 10. 반복문 : 특정 문자열 세기

function countLetter(str) {
	let count = 0;

		for(let i=0; i < str.length; i++){
	
	    if( (str[i].includes("a")) === true || (str[i].includes("A")) === true )
	        count++;
	}
}

// 11. 반복문 : 문자열 삽입

function makeNumber(num) {
	let str = '';

	for(let i=1; i<=num; i++){
        if(i < num){
        str =  str + i + '-'
        } else {
        str =  str + i 
        }
	}
}

// 12. 반복문 : 홀수 문자열

function makeOdd(num) {
	let str = '';

	for (let i=1; i<=num; i++){
	    if( i % 2 === 1 ) {
	        str += i
	    }
	}
}

// 13. 반복문 : 가장 큰 수 찾기

function bigNum(str) {
	let biggest = 0;

	for (let i=0; i < str.length; i++){
	    if(Number(str[i]) > biggest) biggest = Number(str[i])
	} 
	return String(biggest)
}

//	 * 금요일

// 14. 조건문 : 점수에 따른 등급

function grade(score) {
    if( score < 0 || score > 100 ) {
        return "잘못된 점수입니다."
    } else if ( score <= 59 ) {
        return "F"
    } else if ( score <= 69 ) {
        return "D"
    } else if ( score <= 79 ) {
        return "C"
    } else if ( score <= 89 ) {
        return "B"
    } else if ( score <= 100 ) {
        return "A"
    }
}

// 15. 반복문 : 마이페이지

const myShopping = [
	{ category: "과일", price: 12000　},
	{ category: "의류", price:10000　 },
	{ category: "의류", price: 20000　},
	{ category: "장난감", price: 9000 },
	{ category: "과일", price: 5000　 },
	{ category: "의류", price: 10000  },
	{ category: "과일", price: 8000　　},
	{ category: "의류", price: 7000　　},
	{ category: "장난감", price: 5000  },
	{ category: "의류", price: 10000　 },
]

let count , price = 0;
let grade = '';


for (let i=0; i<myShopping.length; i++) {
	if(myShopping[i].category === "의류") {
		count += 1
		price += myShopping[i].price;
	}
}

if( 0 <= count <= 2 ) {
	grade = "Bronze"
} else if ( count <= 4 ) {
	grade = "Silver"
} else if ( count >= 5 ){
	grade = "Gold"
}

// === 의류를 구매한 횟수는 총 5
console.log("의류를 구매한 횟수는 총 " + count + "회 금액은" + price + "원이며 등급은" + grade + "입니다."

)

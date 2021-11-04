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


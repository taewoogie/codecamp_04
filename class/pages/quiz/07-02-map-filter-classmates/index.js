const CLASSMATES = [
    { name:"철수" , age:10 , school:"토끼초등학교" },     
    { name:"영희" , age:13 , school:"다람쥐초등학교" }, 
    { name:"훈이" , age:11 , school:"토끼초등학교" }
  ];

export default function ClassMatesPage(){

    return(
        <div>
            {CLASSMATES.filter((el) => (el.school == '토끼초등학교')).map((el) => ({name : el.name , age: el.age , school : el.school , candy : 10})).map((el) => <div>이름 : {el.name} 나이 : {el.age} 학교 : {el.school} 사탕 : {el.candy}</div>)}
        </div>
    )
}
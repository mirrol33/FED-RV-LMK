function greet(name: string): string {
  return `안녕, ${name}~!`;
}

console.log(greet("찐친 개발자"));
console.log(greet("타입스크립트"));
console.log(greet("JS개발자"));
console.log(greet("코딩의신"));

// 1. 기본타입 선언
const userName: string = "김상중하";
const age: number = 30;
const isActive: boolean = true;
console.log("기본타입");
console.log(userName, age, isActive);

// 2. 배열 타입 선언
const numbers: number[] = [1, 2, 3];
const names: string[] = ["김상중하", "코딩의신"];

// 3. 튜플 (Tuple) 타입 선언
const userInfo: [string, number] = ["김상중하", 30];

console.log("튜플타입");
console.log(userInfo);

// 튜플은 순서대로 데이터 타입을 지정할 수 있다!!

// 4. 유니온 타입 선언
const unionType : "loading" | "success" | "error" = "loading";

console.log("유니온타입");
console.log(unionType);

// 5. 객체 타입 선언
type User = {
    name : string; // 객체처럼 생겼지만 객체가 아니다!!! 타입선언이다!!
    age : number;
    isActive? : boolean; // 선택형 속성처리 (?)
}
// 위의 데이터 형을 적용한 새로운 변수선언 할당
const user1 : User = {
    name : "김상중하", // 이건 객체가 맞다!!!
    age : 30,
    // isActive : true
}

console.log("객체타입");
console.log(user1);

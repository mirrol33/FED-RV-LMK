// 모듈 연습 메인 JS - main.js

// 데이터 JS 가져오기
// import { mTitle, sTitle } from "./text_data.js";
import { 
    mTitle as 큰제목, 
    sTitle as 소제목, 
    personInfo as 개인정보,
    mvData as 영화정보 
} from "./text_data.js";
// console.log(mTitle);

// 메시지함수 불러오기
import msgFn from "./msg_format.js"

console.log(msgFn);

// 나의 함수 가져오기
// import myFn from "./my_function.js";
// console.log(myFn);
// import {myFn} from "./my_function.js";
// console.log(myFn);
import 헐 from "./my_function.js";
console.log(헐);

헐.qs('.tpart').innerHTML = `
    <h2>${큰제목}</h2>
    <h3>${소제목}</h3>
`;

// 두번째 요소 #demo에 이름 나이 메시지 출력하기
// 대상요소
const demo = 헐.qs('#demo');
// 코드변수
let hCode = '';
// 코드에 메시지 넣기(메시지 함수호출함!)
hCode += msgFn('공유',46);
hCode += msgFn('톰행크스',60);
hCode += msgFn('안젤리나',49);
// 개인정보 배열 데이터를 돌면서 메시지함수 호출하기
개인정보.forEach(v=>hCode += msgFn(v[0],v[1]));
console.log(개인정보);

// 화면출력
demo.innerHTML = hCode;

// 세번째 요소 .mvpart에 영화정보 출력하기
// 단 ol>li를 사용할 것
// 대상:
const mvBox = 헐.qs('.mvpart');
// console.log("데이터:",영화정보);
// 제목출력
mvBox.innerHTML = "<h2>영화위시리스트</h2>";
// 객체를 forEach() 메서드 사용하려면?
// 객체를 배열화한다!!
// object.keys(객체) -> 객체의 키값배열생성!!
Object.keys(영화정보).forEach(v=>{
    mvBox.innerHTML += `
    <ol>
        <li>🎪제목 : ${영화정보[v].제목}</li>
        <li>🎪장르 : ${영화정보[v].개요}</li>
        <li>🎪감독 : ${영화정보[v].감독}</li>
        <li>🎪주연 : ${영화정보[v].출연}</li>
        <li>🎪한마디 : ${영화정보[v].문구}</li>
    </ol>`;
});

// HTML DOM요소에 접근
// 첫번째 요소 .tpart에 타이틀 데이터 출력하기

/**********************************************     
    [ import 형식 ]
    import 전달변수 from 파일경로;

    1. import문법을 쓰려면 호출하는 html script요소에
    type="module" 속성을 반드시 셋팅해야한다!

    2. 반드시 가져올 모듈JS에서 export를 해줘야함!

    3. from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭해야함!
    (없으면 안나옴!) (/,./,../ 표시필수)

    4. 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http://...) Live Server로 열기때문에 볼 수 있음!
    -> 로컬파일로 열면 작동안됨!

    5. 모듈화의 모든 export 파일에서도 import는 가능하다!
    ____________________________________________________

    [ import의 사용방법 ]

    1. export default인 경우
        -> import 변수 from 경로
        ->>> 변수는 내가 지을 수 있음

    2. export {} 인 경우
        -> import {보내준변수명,...} from 경로

    ____________________________________________

    [ import 시 변수명 변경하기 : 별칭사용하기 ]

    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로;
    -> 별칭 사용이유:  단순변경요구, 같은이름 변수 피하기

    ____________________________________________

    [ 모듈화를 위한 구성 ]
    1. 데이터 처리하기 위한 JS
    -> text_data.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msg_format.js

***************************************************/
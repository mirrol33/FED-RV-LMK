// JS3-4.for문연습1 JS

/*********************************************** 
    [프로그램 요구사항]

    [1] 미니언즈 넣기
    1. 미니언즈 버튼을 클릭하면
    파란박스에 미니언즈 이미지가 추가되어 들어간다
    2. 이때 미니언즈 버튼마다 한번에 들어가는
    개수가 정해져있다.(1개, 5개, 10개)

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .mini-space
    ______________________________________

    [2] 미니언즈 개수 표시하기
    1. 미니언즈를 넣을때 실시간 반영 개수를 표시한다.
    2. 이때 미니언즈 이미지가 3개씩 있으므로
    3의 배수로 표시해 준다!

    ((대상선정))
    (1) 이벤트대상 : .mini (click이벤트)
    (2) 변경대상 : .stxt span
    ______________________________________

    [3] 파란박스 리셋하기
    1. 리셋버튼을 클릭하면 파란박스의 미니언즈 이미지
    모두가 삭제 된다.
    2. 이때 미니언즈 개수도 0으로 초기화한다.

    ((대상선정))
    (1) 이벤트대상 : .rbtn (click이벤트)
    (2) 변경대상 : .mini-space


***********************************************/


// 1. 대상선정
// 1-1. 이벤트 대상 : .mini
let mini = document.querySelectorAll('.mini');
let miniSpace = document.querySelector('.mini-space');
// 1-3. 개수출력요소 : .stxt span
let stxt = document.querySelector('.stxt span');

// 1-4. 리셋버튼 :
let rbtn = document.querySelector('.rbtn');

// html컬렉션
console.log("선택요소:", mini, mini.length+"개", miniSpace, stxt, rbtn);

// 2. 이벤트 속성 셋팅하기
// 이벤트 대상에게 click이벤트와 함수를 연결한다

// mini.onclick로 바로 불가능하다 다수의 요소에 클릭이벤트를 연결할 수 없다!
// mini.item(0).onclick = function() {};
// mini.item(0).onclick = insertMini; // ()를 제외함! *함수를 실행하지 않고 가지고만 있으라는 뜻)
// mini에 담긴 html컬렉션의 개수는? 변수 .length
// 개수만큼 for문을 돌아서 클릭 이벤트 셋팅을 한다!
// mini[0].onclick = insertMini; // mini[0] : 유사배열
// for(시;한;증){코드}
// i는 이니셰이트(Initiate)의 약자임 시작한다는 뜻
// 카운트를 줄여서 Cnt라고 많이 씀

// 전체 mini개수
const miniCnt = mini.length;

for(let i = 0; i < miniCnt; i++) {
    mini[i].onclick = insertMini;
} /// for ///

//  3. 미니언즈
// 미니언즈 이미지 개수를 저장할 변수를
// 한수구역 바깥에 만들고 전역변수로 설정하여
// 함수에서 변경시 그 값이 유지되도록 설정한다!
let miniCount = 0;

// 이름이 있는 함수는 마지막에 ;을 붙이지 않는다! (에러남)
function insertMini() {
    // 1. 호출한 요소의 개수속성 읽어오기 : data-num
    let num = this.getAttribute('data-num');

    // [속성값 읽어오기 2가지]
    // 1) 선택요소.속성명
    // 2) 선택요소.getAttribute('속성명');

    // [속성값 셋팅법 2가지]
    // 1) 선택요소.속성명 = 값
    // 예) document.querySelector('img').src = 경로
    // 2) 선택요소.setAttribute('속성명', '값');
    // 예) document.querySelector('img').setAttribute('src', '경로');

    // 2. 함수호출확인
    console.log("미니언즈 넣어바바~!",num);

    // 3. 변경대상요소(miniSpace)에 이미지 넣기
    // += 대입연산자 : 기존값에 새로운값을 더한다
    for(let i = 0; i < num; i++) {
        miniSpace.innerHTML += `<img src="./images/Minions.png" alt="미니언즈">`;
        miniCount ++;
    } /// for ///

    // 4. 미니언즈 개수 표시하기
    // 대상: .stxt span -> stxt변수
    stxt.innerHTML = miniCount*3;
    // 미니언즈 이미지에 3개씩 있으므로 곱하기3

} //// insertMini ////


// 4. 리셋버튼 클릭시 초기화기능
// 이벤트 대상: .rbtn -> rbtn변수
rbtn.onclick = function() {
    // 1. 함수호출확인
    console.log("다~지워~~!");

    // 2. 리셋버튼을 클릭하면 파란박스의
    // 미니언즈 이미지 모두가 삭제된다
    miniSpace.innerHTML= "";

    // 3. 이때 미니언즈 개수도 0으로 초기화한다
    stxt.innerHTML = 0;

    // 4. 미니언즈 개수 전역변수도 초기화!
    miniCount = 0;

}; //// click 이벤트 함수 ////
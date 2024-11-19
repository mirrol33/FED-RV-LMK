// 아이폰 회전하기 :  따라보기 기능구현
// 요구사항 분석: 아이폰이 x축 y축으로
// 앞에 분할된 영역에 오버시, 해당 수치로
// 회전하여 마우스 포인터를 따라보게 한다!
// CSS에서 마우스 포인터도 이미지로 바꿔준다!

// 1. 이벤트 대상 : .evt-bx li

const target = document.querySelectorAll(".evt-bx li");
console.log("대상요소:", target);

const iphone = document.querySelector(".iphone");

// 2. 이벤트 설정하기
// 요소개수
const eleCnt = target.length;
console.log("대상요소:", target, eleCnt);

// 위치배열값 : 
// y축값 : 5가지(x축 회전각도 5가지)
// x축값 : 3가지(y축 회전각도 3가지)
const yVal = [-60, -30, 0, 30, 60];
const xVal = [40, 0, -40];

// 개수 만큼 for문 돌려서 이벤트 설정하기
// for(시;한;증){코드}
for(let i=0; i<eleCnt; i++){
    // y축값 : 5가지
    // x축값 : 3가지
    // 위의 값을 구체적으로 배열로 만든다
    // 그 배열값의 순번으로 조합하여 만들어 준다!
    // 각줄 : yx, yx, yx, yx, yx
    // 첫번째줄 : 01,01,02,03,04
    // 두번째줄 : 10,11,12,13,14
    // 세번째줄 : 20,21,22,23,24
    // let y1 = i>4?i-5:i;
    // // 4보다 크면 5를 빼고 아니면 i값 그대로 출력
    // let y2 = i>9?i-10:y1
    // console.log("나돌아?", y2);

    // 출력할 값 y축변수
    let y1;
    //9보다 크면 10뺴고
    if(i>9) y1 = i - 10;
    //4보다 크면 5빼고
    else if(i>4) y1 = i - 5;
    // 그밖에 경우는 i값 그대로
    else y1 = i;

    // 출력할 값 x축 변수
    let x1;
    //9보다 크면 2
    if(i>9) x1 = 2;
    //4보다 크면 1
    else if(i>4) x1 = 1;
    // 그밖에 경우는 i값 그대로
    else x1 = 0;

    console.log("나돌아?", y1, x1);
    console.log("xVal", yVal[y1], "yVal", xVal[x1]);

    // 이벤트 설정하기

    // mouseenter는 대상요소 경계선 안으로 들어갈 때 발생
    target[i].onmouseenter = function(){
        console.log("마엔!",i);
        //변경 대상인 아이폰의 style transform 회전값 변경
        iphone.style.transform =`
        rotateX(${xVal[x1]}deg)
        rotateY(${yVal[y1]}deg)
        `;
    }; //// mouseenter 이벤트 ////

} //// for ////

// 처음에 .evt-bx가 display:none 이므로 
// 애니메이션 끝난 후 약 5초후에 보이게 함!
setTimeout(()=>{
    document.querySelector('.evt-bx').style.display = "block";    
},5000);
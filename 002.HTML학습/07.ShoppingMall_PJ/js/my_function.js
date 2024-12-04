// 공통함수 JS - my_function.js

// 나의 함수 객체 ////
// const myFn = 
export default
{
    // 요소 선택함수
    qs: x => document.querySelector(x),
    qsEl: (el,x) => el.querySelector(x),
    qsa: x => document.querySelectorAll(x),
    qsaEl: (el,x) => el.querySelectorAll(x),
    // 이벤트 셋팅함수
    addEvt: (el,evt,fn) => 
        el.addEventListener(evt,fn),
}; //// myFn 객체 ////

// export default myFn;
// export {myFn};
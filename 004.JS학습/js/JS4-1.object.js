// 영화정보 객체
let lmkObj = {};

// 1. 영화제목
lmkObj.title = "아바타:물의 길(2022)";
// 2. 감독
lmkObj.director = "제임스 카메론";
// 3. 배우
lmkObj.actor = "샘 워딩턴, 조 샐다나";
// 4. 장르
lmkObj.genre =
  " 액션, SF, 전쟁, 판타지 ";
// 5. 관람가
lmkObj.ratings = "12세";
// 6. 예고편
lmkObj.trailer = function () {
  console.log("예고편:영화아이디");
  // 예고편 플레이 함수호출!
  playMovie("kihrFxwdMb4");
}; ////// trailer 메서드 ////////

// 객체확인
console.log("나의객체:", lmkObj);
// 01. 컴포넌트 연습1 JS

// 상품 데이터 제이슨 불러오기
// import goodsData from './comp_data.json' with{type:'json'};
// console.log(goodsData);

// 1. 상단영역 전역 컴포넌트 만들기////
// Vue.component(컨포넌트명,{template:코드})
Vue.component("tit-comp", {
  template: `
  <strong>
    <span>
      😅Vue JS😂 컴포넌트 :
    </span>
    쇼핑모~~올 갤러리 리스트
  </strong>
  `,
}); //// 전역 컴포넌트1 ////

new Vue({el: ".tit"});

// [갤러리용 변수]
let inum = 0;

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기////
Vue.component("list-comp", {
  // (1) 템플릿 설정
  template: `
  <div>
    <img 
      v-bind:src="gsrc"
      v-on:click="goPapa('내가 누구게?')"
      v-on:mouseover="goNow({순번:listNum,이름:'김고은',나이:'30살'})"
    alt="아이템">
    <aside>
      <h2> {{gname}} </h2>
      <h3> {{gprice}} </h3>
    </aside>
  </div>
  `, //// template ////
  // v-bind:src 속성은 일반 src속성과 달리
  // 뷰JS에서 속성값을 바인딩하여 넣는다는 코딩법이다!
  // -> 일반적으로 v-bind:속성 이렇게 쓰면
  // 뷰JS용 바인딩 속성이 된다!!!

  // 부모가 공개한 바인딩 속성을 가져온다!
  // 프롭스다운!! -> 부모요소에 만든 요소명을 등록함!
  // props: [] -> 배열형태로 여러개 등록 가능!
  // props:['list-num','key'],
  props: ["list-num", "my-seq"],
  // 주의: 이것을 변수로 쓸때는 캐밥케이스를 캐믈케이스로
  // 바꿔서 쓴다~! ex) 'list-num' -> listNum
  // 그리고 프롭스 다운변수도 내부에 등록되었으므로
  // this키워드로 호출함! ex) this.listNum

  // (2) data속성 : 컴포넌트에서 쓸 데이터
  // data: function() { 이형태 또는 메서드형으로!
  data() {
    // 메서드형!
    //컴포넌트 data는 함수형태로 반드시 return을 써야함!
    return {
      // 이미지 src
      // gsrc: `./images/${this.setNum()}.jpg`,
      gsrc: `./images/${this.listNum}.jpg`,
      // 상품명
      // gname: this.key, -> key 속성은 유일키 구분목적속성이므로 일반 데이터로 사용할 수 없다! 에러남!
      gname: "Sofia" + this.listNum + 'WD' + (this.mySeq%2?"😹":"😻"),
      // 상품가격
      gprice: this.addComma(123000*this.listNum/2)+`원`,
    };
  }, // data속성
  // (3) methods 속성
  methods: {
    setNum() {
      return ++inum;
    },
    // 세자리마다 콤마추가 메서드
    addComma(x){
      return x.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    // 부모와 자식 컴포넌트 연결하기
    goPapa(txt){ // -> goPapa는 자식 컴포넌트에서 호출!
      this.$emit('hull',txt);
      // $emit(호출할메서드, 전달값)
      // $emit()메서드는 부모에 설정한 새로운 이벤트와 연결
    },
    goNow(obj){ // -> ovNow도 자식컴포넌트에서 호출!
      this.$emit('gotkimchi',obj);
    },
  },
});

// 1. 배열변수만들기
const myArr = [];
// 2. 반복요소 선택하여 forEach돌리기
document.querySelectorAll(".css-cssveg>div").forEach((el, idx) => {
  // 3. 배열값으로 객체를 구성하여 넣기
  if (el.querySelector("a.product-name")) {
    myArr.push({
      idx: idx + 1,
      gName: el.querySelector("a.product-name").innerText,
      gPrice: el.querySelector("p.product-price").innerText.replace(/,/g, ""),
    });
  }
}); ///////// forEach //////////////

// 콘솔 출력하기
console.log(myArr);

//컴포넌트의 부모 뷰인스턴스
new Vue({
  el:'.grid',
  // 자식 컴포넌트의 전달값을 받기위한 메서드를 만든다!
  methods:{
    // 자식이벤트 전달후 실행메서드
    goMsg(txt){ // 전달받을 변수
      alert('자식이 부모에게 이벤트전달 성공!'+txt);
    },
    ovMsg(obj){
      console.log('오버!오케이!',obj);
    }
  },
});

// 3. 유튜브 동영상 컴포넌트 만들기
Vue.component("ifr-comp",{
  // 3-1. template옵션
  template:`
  <iframe width="49%" style="aspect-ratio: 16/9;" 
  v-bind:src="ifrSrc" title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
  `, /// template ////
  // 3-2. data 옵션
  data(){
      return{
          ifrSrc: `https://www.youtube.com/embed/ZH1Y1l1OmTY?autoplay=1&mute=1&loop=1&playlist=ZH1Y1l1OmTY`,
      };
  },
});


// 4. 하단 컴포넌트 만들기
Vue.component("footer-comp",{
  template:`
  <div style="background-color:black;text-align:center;color:white;line-height:2;font-weight:bold; padding:3vw; margin-top:1vw;">
  <h2>Discovery Expedition</h2>
  <h3>Copyright © F&F Corp. All Rights Reserved.</h3>        
  </div>
  `,
});

// 뷰인스턴스 생성하기 : 하단 컴포넌트
new Vue({el:".tit2"});

// 뷰인스턴스 생성하기 : 유튜브 동영상 컴포넌트
// -> 테스트로 하단영역 전역컴포넌트를 유튜브영역에
// 출력하기 위해 아랫쪽으로 코드 위치를 옮겼다!
new Vue({el:".you-box"});

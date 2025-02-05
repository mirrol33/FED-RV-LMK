// 보그 PJ 패션 컴포넌트 - fashion_area.js
// 1. 아이템 데이터 불러오기
import itemData from '../../data/item_data.json' with{type:'json'};
console.log(itemData);

// 3. 패션 영역 구현하기 ///////

// 3-1. 패션 영역용 데이터수집하기
// filter() 메서드는 조건이 맞을때 true리턴!
// -> 결과: 필터링된 배열값
const fashionData = itemData.filter(v=>{
    if(v.mainCat=='fashion')return true
})
// 3-2. 패션 영역 데이터 정렬하기 : idx 오름차순
// sort((a,b)=>a.idx==b.idx?0:a.idx<b.idx?-1:1)
.sort((a,b)=>a.idx==b.idx?0:a.idx<b.idx?-1:1)

console.log('fashion데이터:',fashionData);

export const FashionAreaComp = Vue.component("fashion-area-comp", {
  // 1. 템플릿
  template: `
      <div id="fashion-area">
        <section class="inbox fashion-area">
          <h2 class="sub-tit">FASHION</h2>
          <div class="post-list"></div>
        </section>
      </div>
  `,
  // 2. 리턴함수 데이터
  data() {
    return {
      // 패션 영역 정보 데이터
      fashionInfo: fashionData
    };
  },
  // 3. 메서드
  methods: {},
  // 4. 데이터셋업파트
  created() {},
  // 5. DOM 셋업파트
  mounted() {},
});

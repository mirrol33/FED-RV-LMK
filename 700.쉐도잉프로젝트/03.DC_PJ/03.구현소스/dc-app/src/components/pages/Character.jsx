import React from 'react';

function Character(props) {
  return (
    <div>
      <h1>나는 캐릭터 페이지야!</h1>
      {/* 1. 배너 컴포넌트 */}
      <Banner />
    </div>
  );
}

export default Character;
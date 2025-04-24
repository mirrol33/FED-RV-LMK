// 사용자 정보 입력 및 리스트 출력 컴포넌트
// Firebase와 연결된 사용자 정보 입력 및 리스트 출력 컴포넌트

import React, { useEffect, useState } from "react";
import "../css/user_form.scss";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../js/firebaseConfig";

const UserFormList = () => {
  // [1] 상태변수 정의
  // 사용자 이름 상태변수
  const [userName, setUserName] = useState("");
  // 사용자 나이 상태변수 (숫자형)
  const [userAge, setUserAge] = useState(0);
  // 사용자 주소 상태변수
  const [userAddr, setUserAddr] = useState("");
  // 파이어베이스에서 가져온 사용자 목록 상태변수
  const [userList, setUserList] = useState([]);

  // [2] 사용자 데이터 가져오기 함수
  // 파이어베이스에서 사용자 목록을 가져오는 함수
  const getUserList = async () => {
    // async/await를 사용하여 비동기적으로 데이터를 가져옵니다.
    // 비동기 함수는 async 키워드로 정의합니다.
    // 파이어베이스의 'users' 컬렉션의 모든 문서 가져오기
    const allCollection = await getDocs(collection(db, "users"));
    // await는 비동기 함수에서 사용하여
    // Promise가 해결될 때까지 기다립니다.
    // getDocs는 Firestore에서 문서를 가져오는 함수입니다.
    // collection은 Firestore에서 컬렉션을 참조하는 함수입니다.
    // 'users' 컬렉션의 모든 문서를 가져오기 위해
    // collection(db, 'users')를 사용합니다.

    // 가져온 문서들을 배열로 변환하기
    // 비동기코드로 가져온 후 데이터를 할당하는 아래 코드가 실행된다!
    const userListArray = allCollection.docs.map((doc) => {
      console.log(doc.id, ":", doc.data());
      return { id: doc.id, ...doc.data() };
    });
    // 사용자 리스트 상태변수 업데이트함
    setUserList(userListArray);
    // setUserList는 상태변수를 업데이트하는 함수입니다.
  }; //// 사용자 목록 가져오는 함수 ////

  // [3] 사용자 추가 함수
  const addUser = async () => {
    // async/await를 사용하여 비동기적으로 데이터를 추가하는 함수
    // 사용자 정보를 파이어베이스에 추가하는 함수
    // 이름과 나이가 입력되었는지 확인하기
    if (userName && userAge) {
      // 파이어베이스의 'users' 컬렉션에 새로운 문서 추가하기
      await addDoc(collection(db, "users"), {
        name: userName,
        age: Number(userAge),
        // 나이는 숫자형으로 변환하여 저장한다.
        addr: userAddr
      });
      // addDoc는 Firestore에서 문서을 추가하는 함수입니다.
      // collection(db, 'users')는 Firestore에서 'users' 컬렉션을 참조하는 함수입니다.

      // 입력된 기존 값 초기화하기
      setUserName("");
      setUserAge(0);
      setUserAddr("");

      // 사용자 목록 업데이트 함수 호출
      getUserList();
      // 이것을 호출해야 갱신된 사용자 목록인 화면에 나옴!
    } /// if ///
  };

  // [4] 랜더링 후 실행구역
  useEffect(() => {
    // 사용자 정보를 DB에서 가져오는 함수 호출
    getUserList();
  }, []);
  // [] 처음 한번만 실행
  // [userList]이 상태변수가 변경될때 마다 실행

  // 리턴 코드구역
  return (
    <div className="user-form">
      <h2>Firebase Users</h2>
      {/* 이름 입력 필드 */}
      <label htmlFor="unm">이름:</label>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {/* 나이 입력 필드 */}
      <label htmlFor="age">나이:</label>
      <input
        type="number"
        placeholder="나이을 입력하기"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
      />
      {/* 주소 입력 필드 */}
      <label htmlFor="addr">주소:</label>
      <input
        type="text"
        placeholder="주소을 입력하기"
        value={userAddr}
        onChange={(e) => setUserAddr(e.target.value)}
      />
      {/* 사용자 추가 버튼 */}
      <button onClick={addUser}>사용자 추가</button>

      <hr />

      {/* 사용자 리스트 출력 */}
      <div className="user-list">
        <h3>사용자 리스트</h3>
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age}세 {user.addr})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserFormList;

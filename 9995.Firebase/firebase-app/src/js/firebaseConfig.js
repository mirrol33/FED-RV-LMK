// src/firebaseConfig.ts
// Firebase SDK를 사용하기 위해서는
// Firebase Console에서 Firebase 연동하기를 통해 Firebase SDK를 사용해야 합니다

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // 웹 API 키
    apiKey: "AIzaSyCtA5s9aFKGyXUrPZAYtU__a99s6FDYBzM",
    // 인증 도메인
    authDomain: "react-firebase-app-647ff.firebaseapp.com",
    // 프로젝트 ID
    projectId: "react-firebase-app-647ff",
    // 스토리지 버킷
    storageBucket: "react-firebase-app-647ff.firebasestorage.app",
    // 메시징 보낸이 ID
    messagingSenderId: "116834733600",
    // 앱 ID
    appId: "1:116834733600:web:73039f95ecf1e4ce753645"
};
// 파이어베이스 앱 초기화
const app = initializeApp(firebaseConfig);
// 파이어스토어 DB연결하여 가져오기
export const db = getFirestore(app);
// 이것만 내보내면 내가 만든 DB와 연결하여 테이블을 사용할 수 있다!


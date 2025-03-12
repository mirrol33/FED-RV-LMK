// DC PJ 게시판 리스트 모드 모듈 - Write.jsx
import React, { useContext } from 'react';
import { dCon } from '../dCon';


function Write({setMode}) {
  // setMode - 모든 변경 상태변수 setter

  // 전역 컨텍스트 API 사용하기!
  const myCon = useContext(dCon);
  // console.log(myCon.loginSts);

  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      <table className="dtblview readone">
        <caption>OPINION : Write</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input type="text" className="name" size="20" readOnly="" defaultValue={myCon.loginSts.unm} />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input type="text" className="subject" size="60" />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea className="content" cols="60" rows="10" ></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              <button>Submit</button>
              <button
                onClick={() => {
                  // 리스트 모드('L')로 변경하기
                  setMode("L");
                }}>
                List
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Write;
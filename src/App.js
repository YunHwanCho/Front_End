/*eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  let post = "은평 마포 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "구두 추천",
    "악세사리 추천",
  ]);
  let [따봉, 따봉더하기] = useState(0);

  let [logo, setlogo] = useState("ReactLogo");
  let [cnt, SetCnt] = useState(0);

  function plus() {
    따봉더하기(따봉 + 1);
  }

  //b는 맞춤 함수
  //변수와 state차이 지속적인 수정에 용의하게 사용 가능함. 자동 랜더링에 용의함.
  // -> 자주 변경될 거 같은 html은 state로 만들어놓으면 좋음.
  return (
    <div className="App">
      <div className="blog-Nav">
        <h4>{logo}</h4>
      </div>

      <button
        onClick={() => {
          if (cnt === 0) {
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글제목변경(copy);
            SetCnt(1);
          }
          if (cnt === 1) {
            let copy = [...글제목];
            copy[0] = "남자코트 추천";
            글제목변경(copy);
            SetCnt(0);
          }
        }}
      >
        글수정
      </button>

      <button
        onClick={() => {
          const sortedTitles = [...글제목].sort((a, b) => b.localeCompare(a));
          글제목변경(sortedTitles);
        }}
      >
        내림차순 정렬
      </button>

      <div className="list">
        <h4>
          {글제목[0]} <span onClick={plus}>👍</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

// 컴포넌트 사용할 경우

// 1.반복적인 html축약
// 2.큰페이지
// 3.자주변경되는 것들

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;

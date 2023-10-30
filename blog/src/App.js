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

  let [따봉, 따봉더하기] = useState([0, 0, 0]);

  let [logo, setlogo] = useState("ReactLogo");
  let [cnt, SetCnt] = useState(0);

  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState("");

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

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                if (cnt == 0) {
                  setModal(true);
                  SetCnt(1);
                }
                if (cnt == 1) {
                  setModal(false);
                  SetCnt(0);
                }
                setTitle(i);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉더하기(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button className="btn" onClick={()=> {
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy); 
            }}>삭제</button>
          </div>
        );
      })}

      {modal == true ? (
        <Modal
          color="skyblue"
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          setTitle={setTitle}
        />
      ) : null}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          글제목변경(글제목.concat(입력값));
        }}
      >
        글발행
      </button>
    </div>
  );
}

// 동적인 UI만드는 step
// 1. html css로 미리 디자인 완성
// 2. ui의 현재 상태를 state로 저장
// 3. state에 따라 ui가 어떻게 보일지 작성

// 컴포넌트 사용할 경우

// 1.반복적인 html축약
// 2.큰페이지
// 3.자주변경되는 것들

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}
//props 사용하기 !!

const Photo = () => {
  return (
    <div className="photoSize">
      <img className="big"></img>
    </div>
  );
};
export default App;

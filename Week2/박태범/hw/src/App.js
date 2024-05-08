import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "분좋카 굿",
    "서이추 ㄱ",
    "좋은 글 보고 가요",
  ]);

  const [likes, setLikes] = useState([0, 0, 0]);

  const [blank, setBlank] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1); // 수정 중인 댓글의 인덱스

  // 현재 날짜를 가져오는 함수
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 삭제 기능 구현
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      let copyTitle = [...title];
      copyTitle.splice(index, 1);
      setTitle(copyTitle);
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>

      {title.map((comment, i) => (
        <div className="list" key={i}>
          {editingIndex === i ? (
            // 수정 중인 댓글이면 입력 필드 표시
            <>
              <input
                value={comment}
                onChange={(e) => {
                  let copy = [...title];
                  copy[i] = e.target.value;
                  setTitle(copy);
                }}
              />
              <button
                onClick={() => {
                  // 수정 완료
                  setEditingIndex(-1);
                }}
              >
                저장
              </button>
            </>
          ) : (
            // 수정 중이 아니면 일반 표시
            <>
              {comment}
              <span
                onClick={() => {
                  let copy = [...likes];
                  copy[i] = copy[i] + 1;
                  setLikes(copy);
                }}
              >
                👍
              </span>
              {likes[i]}
              <div>
                <button
                  onClick={() => {
                    // 수정 시작
                    setEditingIndex(i);
                  }}
                >
                  수정하기
                </button>
                <button onClick={() => handleDelete(i)}>삭제하기</button>
              </div>
              {/* 현재 날짜 표시 */}
              <p>{getCurrentDate()}</p>
            </>
          )}
          <hr />
        </div>
      ))}
      <div className="publish">
        <input value={blank} onChange={(e) => setBlank(e.target.value)} />
        <button
          onClick={() => {
            let copy = [blank, ...title];
            setTitle(copy);
            setLikes([0, ...likes]);
            setBlank("");
          }}
        >
          댓글 작성하기
        </button>
      </div>
    </div>
  );
}

export default App;

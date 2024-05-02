import "./App.css";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    { text: "안녕하세요", likes: 0, date: "2024-04-12" },
    { text: "반갑습니다", likes: 0, date: "2024-04-12" },
    { text: "재밌어요", likes: 0, date: "2024-04-12" },
  ]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const getCurrentDate = () => {
    return new Date().toISOString().slice(0, 10);
  };

  const addComment = () => {
    const newComment = { text: input, likes: 0, date: getCurrentDate() };
    setComments([newComment, ...comments]);
    setInput("");
  };

  const deleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const startEdit = (index) => {
    setInput(comments[index].text);
    setEditIndex(index);
  };

  const updateComment = () => {
    const updatedComments = [...comments];
    updatedComments[editIndex] = {
      ...updatedComments[editIndex],
      text: input,
      date: getCurrentDate(),
    };
    setComments(updatedComments);
    setEditIndex(-1);
    setInput("");
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>

      {comments.map((comment, i) => (
        <div className="list" key={i}>
          {comment.text}
          <span
            onClick={() => {
              const updatedComments = [...comments];
              updatedComments[i].likes += 1;
              setComments(updatedComments);
            }}
          >
            👍
          </span>
          {comment.likes}
          <p>{comment.date}</p>
          <button onClick={() => startEdit(i)}>수정</button>
          <button onClick={() => deleteComment(i)}>삭제</button>
          <hr />
        </div>
      ))}

      <div className="publish">
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        {editIndex === -1 ? (
          <button onClick={addComment}>댓글 작성하기</button>
        ) : (
          <button onClick={updateComment}>수정 완료</button>
        )}
      </div>
    </div>
  );
}

export default App;

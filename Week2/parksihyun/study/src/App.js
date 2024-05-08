import "./App.css";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    { text: "블로그 넘 좋아요", likes: 0, date: "2024-04-12" },
    { text: "안녕하세요 잘보고 갑니다~", likes: 0, date: "2024-04-12" },
    { text: "서이추 해주세요", likes: 0, date: "2024-04-12" },
  ]);

  const [newComment, setNewComment] = useState("");
//좋아요
  const handleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes += 1;
    setComments(updatedComments);
  };
//삭제
  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };
//수정
  const handleEdit = (index, newText) => {
    const updatedComments = [...comments];
    updatedComments[index].text = newText;
    setComments(updatedComments);
  };
//현재시간
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>

      {comments.map((comment, index) => (
        <div className="list" key={index}>
          <div>
            {comment.text}
            <span onClick={() => handleLike(index)}>👍</span>
            {comment.likes}
            <p>{comment.date}</p>
          </div>
          <div>
            <button
              onClick={() =>
                handleEdit(index, prompt("댓글을 수정하세요:", comment.text))
              }
            >
              수정
            </button>
            <button onClick={() => handleDelete(index)}>삭제</button>
          </div>
          <hr />
        </div>
      ))}

      <div className="publish">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={() => {
            setComments([
              { text: newComment, likes: 0, date: getCurrentDate() },
              ...comments,
            ]);
            setNewComment("");
          }}
        >
          댓글 작성하기
        </button>
      </div>
    </div>
  );
}

export default App;

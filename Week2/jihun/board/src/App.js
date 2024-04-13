import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState([
    "분좋카 너무 좋아요~",
    "서이추 해주세요~",
    "좋은 글 잘보고 갑니다~!",
  ])
  const [likes, setLikes] = useState([0, 0, 0])
  const [blank, setBlank] = useState('')
  const date = new Date()
  const [modiBlank, setModiBlank] = useState('')
  const [isModify, setModify] = useState([0, 0, 0])
  return (
    <div className="App">
      <div className="black-nav">
        <h4>사자's blog</h4>
      </div>

      {title.map((comment, i) => {
        if (isModify[i]) {
          return (
            <div className='modify'>
              <input value={modiBlank} onChange={(t => {
                setModiBlank(t.target.value);
              })} />
              <button onClick={() => {
                let copys = [...title]
                copys[i] = modiBlank;
                let copy = [...isModify]
                copy[i] = !copy[i]
                setModify(copy)
                setTitle(copys);
                setModiBlank('');
              }}>수정하기</button>
              <hr></hr>
            </div>

          );

        } else {
          return (
            <div className="list" key={i}>{comment}
              <span onClick={() => {
                let copy = [...likes];
                copy[i]++;
                setLikes(copy)
              }}>👍</span>
              {likes[i]}
              <p>{date.toLocaleDateString("ko-kr")}</p>
              <button onClick={() => {
                let copy = [...isModify]
                copy[i] = !copy[i]
                setModify(copy)
                setModiBlank(comment);
              }}>수정</button>
              <button onClick={() => {
                let copy = title.filter((e, number) => number !== i)
                let copys = likes.filter((e, number) => number !== i)
                setLikes(copys);
                setTitle(copy);
              }}>삭제</button>
              <hr></hr>
            </div>
          );
        }
      })}

      <div className="publish">
        <input value={blank} onChange={(e => {
          setBlank(e.target.value);
        })} />
        <button onClick={() => {
          let copy = [blank, ...title];
          setTitle(copy);
          setLikes([0, ...likes]);
          setBlank('');
        }}>글쓰기</button>
      </div>
    </div>
  );
}

export default App;
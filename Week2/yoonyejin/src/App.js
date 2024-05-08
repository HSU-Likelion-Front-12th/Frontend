import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [title, setTitle]=useState([
    {text: '분좋카 너무 조하요~', date: '2024-04-12'},
    {text: '서이추 해주세여', date: '2024-04-12'},
    {text: '글 잘보고 갑니다.', date: '2024-04-12'}
  ]);

  const [blank, setBlank]=useState('');
  const[likes, setLikes]=useState([0, 0, 0]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  const getCurrentDate = () => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    return `${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date}` : date} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // 댓글 삭제 함수
  const handleDelete = (index) => {
    const newTitles = title.filter((_, i) => i !== index);
    setTitle(newTitles);
    setLikes(likes.filter((_, i) => i !== index));
  };

  // 댓글 수정 함수
 const activateEditMode = (index) => {
  setEditIndex(index);
  setEditText(title[index].text);
};
const handleEdit = (index) => {
  const newTitles = title.map((item, i) => {
    if (i === index) {
      return { ...item, text: editText };
    }
    return item;
  });
  setTitle(newTitles);
  setEditIndex(-1);  // 수정 모드 종료
};

  return (
    <div className="App">
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>

      {title.map((item, i)=>(
        <div className="list" key={i}>
          {editIndex === i ? (
            <div>
              <input value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button onClick={() => handleEdit(i)}>확인</button>
            </div>
          ) : (
            <div>
              {item.text}
              <span
              onClick={() => {
                let copy=[...likes];
                copy[i]=copy[i]+1;
                setLikes(copy);
              }}
              >
                👍
              </span>
              {likes[i]}
              <p>{item.date}</p>
              <button onClick={() => activateEditMode(i)}>수정</button>
              <button onClick={() => handleDelete(i)}>삭제</button>
            </div>
          )}
          <hr/>
        </div>
    ))}

      <div className="publish">
        <input value={blank} onChange={(e)=>setBlank(e.target.value)}/>
        <button onClick={()=>{
          let copy = [{ text: blank, date: getCurrentDate() }, ...title];          setTitle(copy);
          setTitle(copy);
          setLikes([0,...likes]);
          setBlank('');
        }}>댓글 작성하기</button>
      </div>
    </div>
  );
}

export default App;
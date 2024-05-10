import './App.css';
import React,{useState} from'react';



function App() {
  const date = new Date();//현재 날짜 가져오기
  const formattedDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; //날짜 출력 방식
  const [title, setTitle] = useState([ //댓글 내용
    '분조카 너무 좋아요~',
    '서이추 해주세요',
    '좋은 글 잘보고 갑니다!'
  ]);
  const [blank, setBlank] = useState(''); // 빈칸 상태를 관리 하는 state
  const [likes, setLikes]=useState([0,0,0]); //좋아요 상태를 관리하는 state

  const [edit, setEdit] = useState('');
  const [editIndex,setEditIndex] = useState(null);

  const editClicked = (i) => { 
    setEditIndex(i);
    setEdit(title[i]); 
  };


  const delClicked = (i) => {  
    let copy = [...title]; //현재 댓글 복사하기
    copy.splice(i, 1);
    setTitle(copy); 
    likes.splice(i, 1); // 삭제된 댓글에 대한 좋아요수 삭제
    setLikes(likes);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>
      {title.map((comment, i) => (
        <div className="list" key={i}>
          {editIndex === i ? (
            // 수정 중인 댓글의 경우 input으로 표시
            <>
              <input value={edit} onChange={(e) => { setEdit(e.target.value); }}/>
              <button onClick={() => {
                  const newTitle = [...title];
                  newTitle[i] = edit; 
                  setTitle(newTitle);
                  setEditIndex(null);
                  setEdit(''); 
              }}>
            완료
          </button>
            </>
          ) : (
            // 수정 중이 아닌 경우 댓글 텍스트와 수정/삭제 버튼 표시
            <>
              {comment}
              <span
                onClick={() => {
                  let copy = [...likes]; // 복사하여 값을 수정하고 반영
                  copy[i] = copy[i] + 1;
                  setLikes(copy);
                }}
              >
                ❤️
              </span>
              {likes[i]}
              <p> {formattedDate}</p>
              <button onClick={() => editClicked(i)}>수정</button>
              <button onClick={() => delClicked(i)}>삭제</button>
              <hr />
            </>
          )}
        </div>
      ))}
      {
        <div className="publish">
          <input
            value={blank}
            onChange={(e) => {
              setBlank(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let copy = [blank, ...title];
              setTitle(copy);
              setLikes([0, ...likes]);
              setBlank('');
            }}
          >
            댓글 작성하기
          </button>
        </div>
      }
    </div>
  );

}

export default App;
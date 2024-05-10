//관련된 것 임포트
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

//App 컴포넌트 정의
function App() {
  //댓글 상태 관리를 위한 useState 훅 사용하기  
  const [comments, setComments] = useState([
    { id: 1, text: '분조카 너무 좋아요~', likes: 0 },
    { id: 2, text: '서이추 해주세요', likes: 0 },
    { id: 3, text: '좋은 글 잘보고 갑니다!', likes: 0 },


  ]);

  //현재 날짜를 가져오는 코드  
  const currentDate = new Date().toLocaleDateString();

  //새로운 댓글을 관리하기 위한 useState 훅 사용하기
  const [newComment, setNewComment] = useState('');



  //좋아요 버튼 클릭 시 동작하는 함수
  
  //1. 'comments.map' 함수를 사용하여 댓글 목록을 순회
  //2. 각 댓글의 아이디(id)가 클릭된 댓글의 아이디와 일치하는지 확인
  //3. 만약 댓글의 아이디가 클릭된 댓글의 아이디와 일치한다면, 해당 댓글의 속성을 변경한 새로운 객체를 반환
  //4. 기존 댓글 객체인 comment를 복사함 ({ ...comment}).
  //5. 좋아요 수(likes)를 1 증가시킴(likes: comment.likes + 1).
  //6. 일치하지 않는 경우에는 그대로 해당 댓글 객체를 반환(: comment).
  const handleLike = (id) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment  
    ));
  };


  //댓글 삭제 로직
  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  //댓글 수정 로직
  const handleEdit = (id, newText) => {
    setComments(comments.map(comment =>
      comment.id === id ? { ...comment, text: newText } : comment
    ));
  };

  // JSX를 반환하여 화면에 출력
  return (
    <div className="App">

      {/*상단 네비게이션 바*/}
      <div className="black-nav">
        <h4>댓글 작성하기</h4>
      </div>
       {/* 댓글 목록을 출력하는 부분 */}

      {comments.map(comment => (
        <div className="list" key={comment.id}>
          {comment.text}
          <span onClick={() => handleLike(comment.id)}>👍 {comment.likes}</span>
          <button onClick={() => handleEdit(comment.id, prompt('Edit comment:', comment.text))}>Edit</button>
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
          
          {/* 각 댓글 옆에 현재 날짜 표시 */}
          <div>
            <h5>{currentDate}</h5>
          </div>
          <hr />
        </div>
      ))}

      {/* 댓글 작성 폼 */}
      <div className="publish">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={() => {
         // 새로운 댓글 추가
          setComments([
            { id: Date.now(), text: newComment, likes: 0 },
            ...comments
          ]);
          setNewComment('');
        }}>댓글 작성하기</button>
      </div>
    </div>
  );
}

// App 컴포넌트를 외부에서 사용할 수 있도록 내보내기
export default App;

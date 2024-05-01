import { useRef, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';
import Comment from './components/Comment';

const BlackNav = styled.div`
  background-color: #333;
  color: white;
  padding: 15px 20px;
  text-align: left;
`

const Publish = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vw;
  max-width: 500px;
  margin-left: 1vw;

  input{
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px; /* 버튼과의 간격 */
  border: 1px solid #ddd;
  border-radius: 4px;
  }

  button{
  padding: 10px 15px;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap; /* 버튼의 텍스트를 한 줄로 유지 */
  }

  button:hover{
  background-color: #595959;
  }

  @media (max-width: 600px) {
    flex-direction: column; /* 세로 방향 배치 */
    max-width: none;

  input,
  button {
    width: 100%; /* 전체 너비 사용 */
    margin-right: 0; /* 오른쪽 마진 제거 */
  }
  button {
    margin-top: 10px; /* 버튼과 입력 필드 사이의 간격 */
  }
}
`;

function App() {
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "분좋카 너무 좋아요~",
      likes: 0,
      time: new Date()
    },
    {
      id: 2,
      comment: "서이추 해주세요~",
      likes: 0,
      time: new Date()
    }, {
      id: 3,
      comment: "좋은 글 잘보고 갑니다~!",
      likes: 0,
      time: new Date()
    }
  ])
  const nextId = useRef(4);

  function onChange(e) {
    setInput(e.target.value);
  }

  function addComments(e) {
    if (input === "") {
      alert("댓글을 입력");
      return;
    }

    setComments([
      ...comments,
      {
        id: nextId.current++,
        comment: input,
        likes: 0,
        time: new Date()
      }
    ])
    setInput("");
  }


  return (
    <>
      <GlobalStyles />
      <BlackNav>
        <h4>사자's Blog</h4>
      </BlackNav>
      <Publish>
        <input type="text" value={input} onChange={onChange} />
        <button onClick={addComments}>글쓰기</button>
      </Publish>
      <Comment comments = {comments} setComments = {setComments}></Comment>
    </>
  );
}

export default App;
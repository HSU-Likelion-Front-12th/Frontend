import './task3.css';
import { useState } from 'react';

function Task3() {

  const [title, setTitle] = useState([
    "안녕하세요.",
    "반가워요.",
    "배가고파요",
  ])
  const [like, setLike] = useState([0, 0, 0]);
  const [blank, setBlank] = useState('')
  return (
    <div className="App">
      <div className="black-nav">
        <h4>사자's blog</h4>
      </div>

      <h2>list</h2>
      {title.map((comment, index) => (
        <div className='list' key={index}>
          {comment}
          <span
            onClick={() => {
              let copy = [...like];
              copy[index] = copy[index] + 1;
              setLike(copy);
              // const copy = [...prevState];
              // copy[index] = copy[index] + 1;
              // return copy;
            }}>
            click
          </span>
          {like[index]}
        </div>
      ))}


      <div className="publish">
        <input
          value={blank}
          onChange={(e) => {
            setBlank(e.target.value);
          }}
        />

        <button onClick={() => {
          let copy = [blank, ...title];
          setTitle(copy);
          setLike([0, ...like]);
        }}>글쓰기</button>
      </div>
    </div>
  );
}

export default Task3;
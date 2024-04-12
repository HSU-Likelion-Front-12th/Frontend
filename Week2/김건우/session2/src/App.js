import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  
  // const [cmt, setCmt] = React.useState([])
  const [newCmt, setNewCmt] = React.useState('');
  const [cmt, setCmt] = React.useState([]);
  const [likes, setLikes] = React.useState([]);
  
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      let data = json.map((elem) => {
        return { body: elem.body, title: elem.title, id: elem.id };
      });
      setCmt(data);
      // 각 게시물의 초기 좋아요 수를 0으로 설정합니다.
      setLikes(new Array(data.length).fill(0));
    });
  }, []);

  //modal
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(showModal);



  function pushLike(i){
    let copy = [...likes];
    copy[i] = copy[i]+1;
    setLikes(copy);
  }
  
  return (
    <div className="App">
      <Header></Header>
      <Comment
      cmt = {cmt}
      likes = {likes}
      pushLike = {pushLike}
      openModal = {openModal}
      ></Comment>
      <CmtInput
        cmt = {cmt}
        newCmt = {newCmt}
        likes = {likes}
        setCmt = {setCmt}
        setNewCmt = {setNewCmt}
        setLikes = {setLikes}>
      </CmtInput>
      <Modal show={showModal} onClose={closeModal} />
    </div>
  );
}

function CmtInput(props){
  const [err, setErr] = React.useState(false);
  const errMsg = err ? (<div>input required</div>): null;
  return (
    <div className="publish">
        <input onChange = {(e)=>{
          props.setNewCmt(e.target.value);
        }}></input>
        <button onClick = {()=>{
          if(props.newCmt == ''){
            setErr(true);
            console.log(err);
          }
          else{
            setErr(false);
            props.setCmt([...props.cmt, props.newCmt]);
            props.setLikes([...props.likes, 0]);
            props.setNewCmt('');
          }
        }}>등록</button>
        {errMsg}
        
      </div>
  )
}

function Header(props){
  return (
    <div className="black-nav">
        <h4>blog</h4>
      </div>
  )
}

function Comment(props){
  return(
    <div>
    {
      props.cmt.map((cmt, idx)=>{
        return (
          <div className='cmt-box' key={idx}>
            <div className = 'cmt' >
              <p></p>
              <b>title</b>: {cmt.id}<p></p>
              <b>content:</b>{cmt.title}<p></p>
              {cmt.body}<p></p>
            </div>
            <div>
              <button onClick={()=>{props.pushLike(idx)}}>👍</button>
              <b>{props.likes[idx]}</b>
              <button onClick={()=>{
                props.openModal()
              }}>edit</button>
            </div>
            
          </div>
        )
      })
    }
    </div>
  )
}


const Modal = (props) => {
  if (!props.show) {
    console.log(props.show);
    return null;
  }else{
    return (
      <div className="modal-background">
        <div className="modal" style={{ bottom: '0px', position: 'fixed' }}>
          <button onClick={()=>{props.onClose()}}>닫기</button>
          <div>
            <input type = 'text' value = 'id'></input>
            <input type = 'text' value = 'edit text'></input>
          </div>
        </div>
      </div>
    );
  }

  
};


export default App;
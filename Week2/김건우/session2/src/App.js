import React from 'react';
import './App.css';
import Header from './Cmpnts/Header.jsx';
import Comment from './Cmpnts/Comment.jsx';
import CmtInput from './Cmpnts/CmtInput.jsx';
import Modal from './Cmpnts/Modal.jsx';

function App() {
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
export default App;
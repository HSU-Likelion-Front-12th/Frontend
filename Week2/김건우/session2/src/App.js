import React from 'react';
import './App.css';
import Header from './Cmpnts/Header.jsx';
import Comment from './Cmpnts/Comment.jsx';
import CmtInput from './Cmpnts/CmtInput.jsx';
import EditModal from './Cmpnts/EditModal.jsx';


function App() {
  const [newCmt, setNewCmt] = React.useState('');
  const [objCmt, setObjCmt] = React.useState([]);
  const [likes, setLikes] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [objEdit, setObjEdit] = React.useState([{title: '', body: '', id: null}]);
  

  //fetch dummy data
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      let data = json.map((elem, idx) => {
        return { body: elem.body, title: elem.title, id: elem.id };
      });
      setObjCmt(data);
      setLikes(new Array(data.length).fill(0));
    });
  }, []);
  
  
  
  console.log(showModal);
  return(
    <div className="App">
      <Header></Header>
      <CmtInput
        cmt = {objCmt}
        newCmt = {newCmt}
        likes = {likes}
        setObjCmt = {setObjCmt}
        setNewCmt = {setNewCmt}
        setLikes = {setLikes}>
      </CmtInput>
      <Comment
        objCmt = {objCmt}
        setObjCmt = {setObjCmt}
        objEdit = {objEdit}
        setObjEdit = {setObjEdit}
        likes = {likes}
        setLikes = {setLikes}
        setShowModal = {setShowModal}
      ></Comment>
      <EditModal
      objCmt = {objCmt}
      setObjCmt = {setObjCmt}r
      showModal={showModal}
      setShowModal = {setShowModal}
      objEdit = {objEdit}
      setObjEdit = {setObjEdit}
      />
    </div>
  );
}
export default App;
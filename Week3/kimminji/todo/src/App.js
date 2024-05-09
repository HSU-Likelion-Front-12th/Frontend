import Main from "./component/Main";
import {Route, Routes,useNavigate} from "react-router-dom";
import { useState } from "react";
import Storage from "./component/Storage";

function App(){
  const [list, setList] = useState([]); //목록 배열 생성
  const navigate = useNavigate();
  const [storage, setStorage] = useState([]);

  //목록 추가 함수
  function addList(){
    const newItem = { //목록 객체 생성 
      id: Date.now(), //고유한 id값
      content: "", //내용
    };
    setList((prevList)=>[...prevList,newItem]);
  }

  //목록 입력 함수
  function updateList(itemId,newContent){
    setList((prevList)=>
      prevList.map((item)=>
      item.id === itemId? { ...item, content: newContent}:item)
    );
  }

  //목록 삭제 함수 
  function deleteList(itemId){
    setList((prevList)=>{
      return prevList.filter((item)=> item.id!==itemId); 
    })
  }
  
  function movePage(){ //보관함 페이지로 이동하는 함수 
    navigate("/Storage")
  }

  function movetoStorage(itemId){ //선택된 것을 보관함으로 옮기는 함수  1. 선택된 것을 그대로 보관함에 보이도록 2. 목록에서 해당하는 값 지우기
    const checkedItem = list.find((item)=>item.id === itemId);
    if(checkedItem) {
      setStorage((preStorage)=> [...preStorage,checkedItem]);
      deleteList(itemId);
    }
  }
  
  return(
    <Routes>
      <Route path="/" element={<Main list={list} addList={addList} updateList={updateList} deleteList={deleteList} movePage={movePage} movetoStorage={movetoStorage} />}></Route>
      <Route path="/Storage" element={<Storage storage={storage}/>}></Route>
    </Routes>
  )
}
export default App;
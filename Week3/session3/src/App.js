import './App.css';
import Main from './Cmpnts/Main';
import Storage from './Cmpnts/Storage';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

function App() {
const [list, setList] = useState([{}]);
const [todoCheckedList, setTodoCheckedList] = useState([])

//목록 입력 함수
  function updateList(itemId, newContent){
    setList((prev)=>{
      prev.map((elem)=>{
        if(elem.id === itemId){
          return {
            ...elem,
            content: newContent
          }
        }else {
          return elem
        }
    })
  })}

//   //목록 삭제 함수
  function deleteList(itemId){
    setList((prevList)=>{
      return prevList.filter((item)=> item.id !== itemId)
    })
    console.log('delete list')
  }
  return (
    <div>
    <Routes>
      <Route
        path = '/'
        element = {<Main 
          list = {list}
          setList = {setList}
          todoCheckedList = {todoCheckedList}
          setTodoCheckedList = {setTodoCheckedList}
          updateList={updateList}
          deleteList={deleteList}/>}>
      </Route>
      <Route path='/storage' element={<Storage todoCheckedList={todoCheckedList}></Storage>}></Route>
    </Routes>
    </div>
  );
}

export default App

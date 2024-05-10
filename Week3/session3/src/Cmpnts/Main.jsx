import '../App.css'
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/Group.svg'

function Main({list, setList, deleteList, todoCheckedList, setTodoCheckedList}){
    const navigator = useNavigate()
    const [input, setInput] = useState(''); 

    function inputChangeHandler(id, value) {
        // 리스트의 특정 항목을 업데이트하는 로직을 구현해야 합니다.
        setList((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, content: value } : item
          )
        );
     }

     function checkBoxCheckHandler(elem){
      setTodoCheckedList((prev)=>{
        return [...prev, elem]
      })
      deleteList(elem.id)
     }

      function addListHandler(){
        const now = Date.now();
          setList((prev) => [
          ...prev,
          { id: now, content: input }
          ]);
          setInput('')
      }
    return (
        <div className="App">
          <h1>TodoList</h1>
            <div className='buttonBox'>
                <button className="plusButton" onClick={()=>{addListHandler()}}>
                    Plus
                </button>
                <button className="plusButton" onClick={()=>{navigator('/storage')}}>
                    Storage
                </button>
            </div>
            {list.map((elem)=>
                    <div className="toDoList" key={elem.id}>
                    <input type="checkbox" onChange={()=>{checkBoxCheckHandler(elem)}} className="select"></input>
                    <input type="text" className="field" placeholder="내용을 입력해주세요" value={elem.content} onChange={(e)=>{inputChangeHandler(elem.id, e.target.value)}}></input>
                    <button className="minusButton" onClick={()=>deleteList(elem.id)}></button>
                    <img src={img} alt='삭제 이미지' onClick={()=>deleteList(elem.id)} />
                </div>
            )}
        </div>
    )
}

export default Main;


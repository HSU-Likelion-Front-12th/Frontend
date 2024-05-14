import { useState } from "react";
import "../App.css";
import ToDoButton from "./ToDoButton";

export default function Main({list, storageItems, addList, updateList, deleteList, moveToStorage}) {
  const [showStorage, setShowStorage] = useState(false);
  
  return  (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton" onClick={() => setShowStorage(!showStorage)}>
          Storage
        </button>
      </div>
      {showStorage ? (
        storageItems.map((item) => <div key={item.id}>{item.content}</div>)
      ) : (
      list.map((item) => (<ToDoButton 
          key={item.id}
          item={item}
          updateContent={updateList}
          deleteList={()=>deleteList(item.id)}
          moveToStorage={moveToStorage}
        />)
      )
      )}
    </div>
  )
}

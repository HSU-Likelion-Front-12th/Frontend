import "../App.css"
import ToDoButton from "./ToDoButton"
export default function Main({ list, addList, updateList, deleteList, addStorage, storageList }) {
  return (
    <div className="App">
      <div className="buttonBox">

        <button className="plusButton" onClick={addList}>
          Plus
        </button>

        <button className="plusButton">
          Storage
        </button>

      </div>
      {list.map((item) => {
        return (
          <ToDoButton
            key={item.id}
            item={item}
            updateContent={updateList}
            deleteList={() => {
              deleteList(item.id);
              addStorage(item.content);
              //지워진 값을 찾아서 해당 값이 Storage에 저장이 될 수 있도록 한다.
              // setStorageList((prevent) => [...prevent, item.content])
              console.log(item.id);
              console.log(item.content);
            }}
          />
        )
      })}
      <button onClick={() => { console.log(storageList) }}>check</button>
    </div>
  )
}
import { Link } from "react-router-dom";
import "../App.css";
import ToDoButton from "./ToDoButton";

export default function Main({
  list,
  addList,
  updateList,
  deleteList,
  addToArchive,
}) {
  return (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        {/* 버튼을 div 요소로 감싸고 Link 컴포넌트를 넣어서 스타일 적용 */}
        <div className="plusButton">
          <Link to="/Storage">Storage</Link>
        </div>
      </div>
      {list.map((item) => {
        return (
          <ToDoButton
            key={item.id}
            item={item}
            updateContent={updateList}
            deleteList={() => deleteList(item.id)}
            addToArchive={addToArchive}
          />
        );
      })}
    </div>
  );
}

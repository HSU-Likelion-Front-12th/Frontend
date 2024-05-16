import "../App.css";
import ToDoButton from "./ToDoButton";
import { useNavigate } from "react-router-dom";

export default function Main({
  list,
  addList,
  updateList,
  deleteList,
  saveContent,
  handleToggleChecked,
  toggleCheck,
}) {
  const navigate = useNavigate();

  function completeList() {
    navigate("/storage");
  }
  return (
    <div className="App">
      <div className="buttonBox">
        <button className="plusButton" onClick={addList}>
          Plus
        </button>
        <button className="plusButton" onClick={completeList}>
          Storage
        </button>
      </div>
      {list.map((item) => {
        return (
          <ToDoButton
            key={item.id}
            item={item}
            updateContent={updateList}
            deleteList={() => deleteList(item.id)}
            saveContent={saveContent}
            handleToggleChecked={handleToggleChecked}
            toggleCheck={() => toggleCheck(item.id)}
          />
        );
      })}
    </div>
  );
}

export default function StorageContent({ title }) {
  return (
    <div className="toDoList">
      <input type="checkbox" className="select" checked></input>
      <p>{title}</p>
    </div>
  );
}

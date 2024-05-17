export default function StorageManager() {

  return (
    <>
      <button onClick={() => { console.log(localStorage.getItem("content")) }} >click</button>
    </>
  )
}
export default function Storage({ storageList }) {
  return (
    <>
      <h1>Storage</h1>
      {storageList.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
      <button onClick={() => { console.log(storageList) }}>check</button>
    </>
  )
}
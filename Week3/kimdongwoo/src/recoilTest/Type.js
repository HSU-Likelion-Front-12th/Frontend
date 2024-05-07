export default function Type({ handleSetCount, isCount, element }) {

  return (
    <div>
      <h2>increase x {element} : {isCount}</h2>
      <button
        onClick={
          () => {
            console.log("check");
            handleSetCount(element); //1씩증가하는 구조
          }
        }>Count</button>
    </div>
  )
}
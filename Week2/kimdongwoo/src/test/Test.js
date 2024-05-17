import add from "./add"
import addInFunction from "./addInFunction"

export default function Test() {
  const { addIn } = addInFunction()

  return (
    <>
      <h1>add.js</h1>

      <button onClick={() => {
        const result = add(1, 2);
        console.log(result)
      }}>click</button>

      <h1>addInFunction.js</h1>

      <button onClick={() => {
        const result = addIn(3, 2);
        console.log(result)
      }}>click</button>
    </>
  )
}
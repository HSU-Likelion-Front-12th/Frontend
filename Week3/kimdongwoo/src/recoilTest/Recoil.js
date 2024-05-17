import Type from "./Type";
import { State } from "./State";

export default function Recoil() {
  // const [isCount, setCount] = useState(0);

  // const handleSetCount = (element) => {
  //   return setCount(prevent => prevent + element);
  // }

  // const handleIsCount = () => {
  //   return isCount;
  // }

  const { handleSetCount, handleIsCount } = State();
  const Check = handleIsCount();
  return (
    <>
      <h1>Recoil</h1>
      <h2>Parent</h2>
      {handleIsCount()}
      <h2>Child</h2>
      <Type handleSetCount={handleSetCount} isCount={handleIsCount()} element={1}></Type>
      <Type handleSetCount={handleSetCount} isCount={handleIsCount()} element={2}></Type>
      <button onClick={() => { handleSetCount(1); console.log(Check) }}>확인</button>
    </>
    // <h1>Recoil</h1>
    // <h2>Parent</h2>
    // {handleIsCount()}
    // <h2>Child</h2>
    // <Type handleSetCount={handleSetCount} isCount={handleIsCount()} element={1}></Type>
    // <Type handleSetCount={handleSetCount} isCount={handleIsCount()} element={2}></Type>
    // <button onClick={() => { handleSetCount(1); console.log(Check) }}>확인</button>
  )
}
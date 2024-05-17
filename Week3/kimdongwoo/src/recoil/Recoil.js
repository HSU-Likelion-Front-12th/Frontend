import Type from "./Type";
import { RecoilRoot, useRecoilState } from "recoil";
import countState from "./RecoilAtom"; // RecoilAtom.js에서 countState import

export default function Recoil() {

  function DisplayCount() {
    const [isCount, setCount] = useRecoilState(countState);

    return <p>Count: {isCount}</p>;
  }

  return (
    <RecoilRoot>
      <h1>Recoil</h1>
      <h2>Parent</h2>
      <DisplayCount />
      <h2>Child</h2>
      <Type element={1}></Type>
      <Type element={2}></Type>
    </RecoilRoot>
  )
}
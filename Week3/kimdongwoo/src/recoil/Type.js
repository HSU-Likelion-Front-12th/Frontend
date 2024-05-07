import { useRecoilState } from "recoil";
import countState from "./RecoilAtom"; // RecoilAtom.js에서 countState import

export default function Type({ element }) {

  const [isCount, setCount] = useRecoilState(countState);

  const handleCount = (element) => {
    setCount(prevent => prevent + element);
    // setCount(element + 1);
  }

  return (
    <div>
      <h2>increase x {element} : {isCount}</h2>
      <button
        onClick={
          () => {
            console.log("check");
            handleCount(element); //1씩증가하는 구조
          }
        }>Count</button>
    </div>
  )
}
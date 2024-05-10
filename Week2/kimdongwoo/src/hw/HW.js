import { useState } from "react";

import Time from "./Time";
import Date from "./Date";

export default function HW() {
  const [isIssue, setIssue] = useState('');
  const [isIssueList, setIssueList] = useState([]);

  //Note
  //유지 보수 차원에서 useState의 set영역들을 함수로 관리 한다.
  //아직 정확하게 비동기로 처리가되는 useState와 함수의 연관 관계를 이해하고 파악하지는 못했다.
  //짐작이 되는 부분으로는 함수를 사용함으로써 return문을 사용되는 영역과 연관을 지어서 봐야 하지 않을까 한다.

  const handleIssue = (element) => {
    setIssue(element);
  }

  const handleIssueList = (element) => {
    setIssueList(prevent => { return [...prevent, element] })
  }

  return (
    <>
      <h1>HW</h1>
      <Date></Date>
      <div>this is my issue List</div>
      <div>{
        isIssueList.map((element, index) => {
          return <div key={index}>{element}</div>
        })
      }</div>

      <input
        value={isIssue}
        onChange={(e) => {
          const value = e.target.value
          handleIssue(value);
        }} />

      <input
        type="submit"
        onClick={() => {
          handleIssueList(isIssue);
          handleIssue('');
          console.log(Time());
        }} />
      <h1>{isIssueList}</h1>
    </>
  );
}
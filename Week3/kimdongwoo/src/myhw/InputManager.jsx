import { useState } from 'react';
import Input from './Input';

export default function InputManager({
  handleDisable,
  isDisable,
  isContent,
  setContent,
  handleSetLocalStorage }) {

  const [inputCount, setInputCount] = useState([]); // 생성된 Input 컴포넌트 수를 추적하는 상태

  const handleAddInput = () => {
    const newIndex = inputCount.length;
    const newInputComponent = <Input key={newIndex} handleDisable={handleDisable} isDisable={isDisable} setContent={setContent} handleSetLocalStorage={handleSetLocalStorage} />;
    setInputCount([...inputCount, newInputComponent]);
  };

  return (
    <>
      <h1>Test</h1>

      {/* {[...Array(inputCount)].map((_, index) => (
        <Input
          key={index}
          handleDisable={handleDisable}
          isDisable={isDisable}
          setContent={setContent}
          handleSetLocalStorage={handleSetLocalStorage}
        />
      ))} */}
      {/* 
      <button
        disabled={isDisable}
        onClick={() => {
          console.log(isContent);
          handleSetLocalStorage();
          alert("Saved your data");
        }}

      >저장</button> */}

      <div>
        {inputCount}
        <button onClick={handleAddInput}>Add</button>
        <a href="/storage">Storage</a>
      </div>
    </>
  )
}
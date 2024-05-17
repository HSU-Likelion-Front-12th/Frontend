import { useState } from "react";

export function State() {
  const [isCount, setCount] = useState(0);

  const handleSetCount = (element) => {
    setCount(prevCount => prevCount + element);
  }

  const handleIsCount = () => {
    return isCount;
  }

  return { isCount, handleSetCount, handleIsCount };
}
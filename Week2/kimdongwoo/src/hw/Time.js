import React, { useState, useEffect } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 매 초마다 현재 시간을 업데이트
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timerID);
  }, []);

  return (
    currentTime.toLocaleTimeString()
  );
}


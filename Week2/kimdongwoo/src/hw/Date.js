import React, { useState, useEffect } from "react";

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // 매 초마다 현재 시간을 업데이트
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(timerID);
  }, []);

  // 날짜를 MM/DD/YYYY 형식으로 변환하는 함수
  const formatDate = (date) => {
    const options = { month: "2-digit", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  // 시간을 HH:MM:SS 형식으로 변환하는 함수
  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return time.toLocaleTimeString(undefined, options);
  };

  return (
    <>
      <p>{formatDate(currentDateTime)} {formatTime(currentDateTime)}</p>
    </>
  );
}

export default Clock;

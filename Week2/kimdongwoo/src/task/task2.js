import React, { useState } from 'react'

function task2() {

  let [like, setLike] = useState(0);
  let [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  }

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            setLike(like + 1);//랜더링이 된 후의 값.
            console.log(like); //랜더링이 된 전의 값 비동기적.. 
          }}
        >click</button>
        {like}
      </div>

      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isOpen} closeModal={closeModal}></Modal>
    </>
  )
}

function Modal(props) {
  if (!props.isOpen) return null;
  return (
    <>
      <h2>모달입니다. 뿅</h2>
      <button onClick={props.closeModal}>닫기</button>
    </>
  )
}

export default App;

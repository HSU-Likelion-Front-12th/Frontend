import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const CommentList = styled.ul`
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  li{
    border: 1px solid #e1e4e8;
    border-radius: 6px;
    background-color: #fff;
    margin-top: 15px;
    padding-left: 5px;
  }

  .title{
    display: flex;
    justify-content: space-between;
    min-width: 500px;
    align-items: center;
    border-bottom: 1px solid #e1e4e8;;
  }

  .like{
    display: flex;
    cursor: pointer;
    padding-right: 5px;
  }

  .comment{
    padding: 10px 0;
  }

  .btns{
    display: flex;
    width: 13%;
    justify-content: space-between;
    margin: 5px;
  }
`;

const customModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "360px",
    height: "180px",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
  },
};

const Comment = ({ comments, setComments}) => {
  function addLikes(id) {
    setComments(comments.map(comment => {
      if (comment.id === id) {
        return {
          ...comment,
          likes: comment.likes + 1
        };
      }
      return comment;
    }));
  }

  function deleteComment(id) {
    setComments(comments.filter(comment => comment.id !== id));
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingComment, setEditingComment] = useState("");
  const [editingCommentId, setEdtingCommentId] = useState(null);
  function openAndCloseModal(id) { 
    setModalIsOpen(!modalIsOpen);
    const target = comments.find(comment => comment.id === id);
    if (target) {
      setEditingComment(target.comment);
      setEdtingCommentId(id);
    }
  }

  function onChange(e){
    setEditingComment(e.target.value);
  }

  function modifyComment(){
    if(editingComment===""){
      alert("수정할 코멘트를 입력");
      return;
    }
    
    if (editingCommentId !== null) {
      setComments(comments.map(comment => {
        if (comment.id === editingCommentId) {
          return {
            ...comment,
            comment: editingComment
          };
        }
        return comment;
      }));
      setModalIsOpen(false);
    }
  }

  return (
    <CommentList>
      {comments.map(e => (
        <li key={e.id}>
          <div className='title'>
            <span>
              <strong>User{e.id} </strong>
              commented on {e.time.getFullYear()}년 {e.time.getMonth() + 1}월 {e.time.getDate()}일 {`${e.time.getHours()}:${String(e.time.getMinutes()).padStart(2, '0')}:${String(e.time.getSeconds()).padStart(2, '0')}`}
            </span>
            <span className='like' onClick={() => addLikes(e.id)}>
              👍{e.likes}
            </span>
          </div>
          <div className="comment">
            {e.comment}
          </div>
          <div className='btns'>
            <button onClick={() => openAndCloseModal(e.id)}>수정</button>
            <button onClick={() => deleteComment(e.id)}>삭제</button>
          </div>
        </li>
      ))}
      <Modal style={customModalStyles} isOpen={modalIsOpen} onRequestClose={openAndCloseModal}>
        <input type="text" value={editingComment} onChange={onChange} />
        <button onClick={modifyComment}>수정</button>
        <button onClick={openAndCloseModal}>취소</button>
      </Modal>
    </CommentList>
  );
};

export default Comment;
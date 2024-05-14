import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const RemoveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover{
    ${RemoveIcon} {
        display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done &&
    css`
    border: 1px solid #38d9a9;
    color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => props.done &&
    css`
    color: #ced4da;
  `}
`;

const TodoItem = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    let q;
    if(done){
      q = window.confirm("보관함에서 제외하시겠습니까?");
    }
    else{
      q = window.confirm("보관함에 추가하시겠습니까?");
    }
    
    if(!q){
      return;
    }

    dispatch({ type: "TOGGLE", id });
    
  };
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <RemoveIcon onClick={onRemove}>
        <MdDelete />
      </RemoveIcon>
    </TodoItemBlock>
  );
};

export default TodoItem;
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useNextId, useTodoDispatch } from '../TodoContext';


const CircleButton = styled.button`
      background: #38d9a9;
      &:hover{
        background: #63e6be;
      }
      &:active{
        background: #20c997;
      }
      width: 80px;
      height: 80px;
      z-index: 5;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      color: white;
      border-radius: 50%;
      outline: none;
      border: none;
      transition: 0.125s all ease-in;

      ${props => props.open &&
        css`
        background: #ff6b6b;
        &:hover{
            background: #ff8787;
        }
        &:active {
        background: #fa5252;
      }
        transform: translate(-50%, 50%) rotate(45deg);
      `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    padding: 32px;
    padding-bottom: 72px;
    background: #f8f9fa;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
`;

const CreateTodo = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const dispatch = useTodoDispatch();
    const nextId = useNextId();

    function openInput() {
        setOpen(!open);
    }

    function onChange(e) {
        setInput(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if(input===""){
            alert("할 일을 입력하세요");
            return;
        }
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current++,
                text: input,
                done: false,
            }
        });

        setInput("");
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            onChange={onChange}
                            value={input}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={openInput} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
};

export default CreateTodo;
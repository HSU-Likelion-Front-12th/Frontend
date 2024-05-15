import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const StorageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StorageTitle = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 4rem;
    text-transform: uppercase;
  }
`;

const CompletedTodos = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Item = styled.li`
    font-size: 21px;
    width: 100%;
    padding: 12px 40px;
`

const Storage = () => {
    const state = useTodoState();
    const done = state.filter(todo=>todo.done);
    return (
        <StorageWrapper>
            <StorageTitle>
                <h1>
                    보관함 목록
                </h1>
            </StorageTitle>
            <CompletedTodos>
                {done.map((item, i)=>(
                    <Item key={item.id}>
                        {i + 1}: {item.text}
                    </Item>
                ))}
            </CompletedTodos>
        </StorageWrapper>
    );
};

export default Storage;
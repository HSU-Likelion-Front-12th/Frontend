import React from 'react';
import { styled } from "styled-components";
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';


const TodoTemplete = () => {
    return (
       <>
        <TodoHead />
        <TodoList />
        <CreateTodo />
       </>
    );
};

export default TodoTemplete;
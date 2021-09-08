import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/Todolist';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Study',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'
        }
    ]

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        // Clone todo list to new one
        const newTodoList = [...todoList];

        // Toggle State
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }

        newTodoList[idx] = newTodo;

        // Update todo list
        setTodoList(newTodoList);

        console.log(todo, idx)

    }

    return (
        <div>
            <h3>To Do List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;
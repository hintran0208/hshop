import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/Todolist';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Study',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    // Clone todo list to new one
    const newTodoList = [...todoList];

    // Toggle State
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    newTodoList[idx] = newTodo;

    // Update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === 'all' || filteredStatus === todo.status
  );
  // console.log(renderTodoList);

  return (
    <div>
      <h3>To Do List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;

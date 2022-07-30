import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListState } from './TodoStore';
import TodoItem from './TodoItem';
import TodoListCreator from './TodoListCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoListCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TodoList;

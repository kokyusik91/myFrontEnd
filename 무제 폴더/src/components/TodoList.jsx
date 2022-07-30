import { observer } from 'mobx-react';
import { action } from 'mobx';

// observer로 감싸진 영역은 감지 대상에 들어간다.
const TodoList = observer(({ store }) => {
  const onNewTodo = () => {
    store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
  };

  const run = () => {
    store.todos[0].completed = !store.todos[0].completed;
    store.todos[1].task = 'Random todo ' + Math.random();
    store.todos.push({ task: 'Find a fine cheese', completed: true });
  };

  const fetchTodo = () => {
    console.log('실행');
    store.fetchData();
  };

  const random = () => {
    store.pendingRequests++;
    setTimeout(
      action(() => {
        store.addTodo('Random Todo ' + Math.random());
        store.pendingRequests--;
      }),
      2000
    );
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
      <button onClick={run}>run code</button>
      <button onClick={random}>random data</button>
      <button onClick={fetchTodo}>load data</button>
    </div>
  );
});

const TodoView = observer(({ todo }) => {
  // 체크표시 되고 난후
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };
  // 더블 클릭한 함수
  const onRename = () => {
    todo.task = prompt('Task name', todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
    </li>
  );
});

export default TodoList;

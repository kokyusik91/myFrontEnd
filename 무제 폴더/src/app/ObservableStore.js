import axios from 'axios';
import {
  makeObservable,
  observable,
  computed,
  action,
  autorun,
  flow,
} from 'mobx';

class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    // 누군가 관찰 할 수 있게 해준다.
    makeObservable(this, {
      todos: observable,
      pendingRequests: observable,
      // computed는 값
      completedTodosCount: computed,
      report: computed,
      // action은 바뀌는 애
      addTodo: action,
      // 비동기 통신은 flow로 한다.
      fetchData: flow,
    });
    // report라는 getter가 불릴때마다 호출된다.
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
  // generator 문법
  // 비동기 통신은 flow로 한다.
  fetchData = function* () {
    const fetchTodo = async () => {
      const response = await axios.get('/todo');
      console.log('응답값', response);
      return response.data.todo.task;
    };
    try {
      const todo = yield fetchTodo();
      this.addTodo(todo);
    } catch (error) {
      console.log(`error:${error}`);
    }
  };
}

export const observableTodoStore = new ObservableTodoStore();

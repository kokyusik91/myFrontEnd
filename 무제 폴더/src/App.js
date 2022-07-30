import './App.css';
import Emotion from './components/Emotion/Emotion';
import Media from './components/Emotion/Media';
import KeyFrames from './components/Emotion/KeyFrames';
import Example from './components/SassExample/Example';
import TestMocking from './components/TestMocking';
import Counter from './features/counter/Counter';
import MobxExample from './components/MobxExample';
import TodoList from './components/TodoList';
import { observableTodoStore } from './app/ObservableStore';

function App() {
  return <TodoList store={observableTodoStore} />;
}

export default App;

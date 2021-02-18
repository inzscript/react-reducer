import './App.css';
import CounterV1 from './components/CounterV1';
import CounterV2 from './components/CounterV2';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Using Reducer</h1>
      <CounterV1 />
      <CounterV2 />
      <Todo />
    </div>
  );
}

export default App;

import './App.css';
import CounterV1 from './components/CounterV1';
import CounterV2 from './components/CounterV2';

function App() {
  return (
    <div className="App">
      <h1>Hello from my App</h1>
      <CounterV1 />
      <CounterV2 />
    </div>
  );
}

export default App;

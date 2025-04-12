import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isDraw, setIsDraw] = useState(false); // Добавляем состояние для ничьи

  function handleClick() {
    if (!isDraw && count < 9) { // Проверяем, что игра еще продолжается
      setCount(count + 1);
    }
    
    if (count === 8) { // После 9-го хода проверяем на ничью
      setIsDraw(true);
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        {isDraw ? <p>It's a draw!</p> : null} {/* Выводим сообщение о ничье */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
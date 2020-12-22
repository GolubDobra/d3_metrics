import React from 'react';
import Canvas from './Canvas';
//import Data from './Data/Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Закрытие рублевых депозитов, млрд руб.</h1>
      </header>
      <div id="chart-container">
        <Canvas />
      </div>
      <div>Hello!</div>
    </div>
  );
}

export default App;

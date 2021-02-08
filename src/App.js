import React from 'react';
import {UseWords} from './custom/UseWords'

function App() {
  const [
    ref, 
    isClicking, 
    text, 
    handleChange, 
    timeRemaining, 
    totalWords, 
    startGame
  ]
   = UseWords(5)

  return (
    <div>
      <h1>Typee: How Fast Can You Type?</h1>
      <textarea
        ref={ref}
        disabled={!isClicking}
        name="text"
        value={text}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button 
        disabled={isClicking}
        onClick={startGame}>Start</button>
      <h1>Total Words: {totalWords}</h1>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './Counter.css'

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Try me!</h1>
        <input
        name="try me!"
        type="number"
        />
      <p>Le compteur est  à : {count} </p>
      
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <br></br>
      <img 
        src= 'https://i.pinimg.com/originals/0c/6c/31/0c6c319447cea2759446e6f2266a69af.png'
        className= 'perceval'
        alt='Perceval'
        />
    </div>
  );
}

export default Counter;
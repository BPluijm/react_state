import React from 'react';
import './App.css';

// nep state ter illustratie
// const state ={
//     color: 'Paars',
//     clicks: 0,
// };

function App() {
// useState geeft 2 waardes terug; key v/de state + setter functie
  const [color, setColor] = React.useState('Onbekend');
  // const [clicks, setClicks] = React.useState(0);

// hoe setColor wordt aangeroepen
// setColor('groen')

  return (
      <div>
        <h1>State uitgelegd</h1>

        <h3>De gekozen kleur is: {color}</h3>

        <button
            type="button"
            className="purple"
            onClick={() => setColor('Paars')}
        >
          Paars
        </button>
        <button
            type="button"
            className="red"
            onClick={() => setColor('Rood')}
        >
          Rood
        </button>
        <button
            type="button"
            className="pink"
            onClick={() => setColor('Roze')}
        >
          Roze
        </button>
      </div>
  );
}

export default App;

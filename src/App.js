import React, { useState } from 'react';
import ShowNumber from './showNumber';
import EditNumber from './editNumber';

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  return (
    <div>
      <button onClick={() => {
        const array = [];
        for (let i = 0; i < 10; i++) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;
          if (array.find(n => n.number === randomNumber)) {
            i--;
            continue;
          }
          array.push({ number: randomNumber, editing: false, tempValue: randomNumber });
        }
        setRandomNumbers(array);
      }}>Generar</button>
      {randomNumbers.map((randomNumber, index) => {
        return <div key={randomNumber.number}>
          {!randomNumber.editing && <ShowNumber 
            randomNumber={randomNumber}
            randomNumbers={randomNumbers}
            setRandomNumbers={setRandomNumbers}
          />}
          {randomNumber.editing && <EditNumber 
            randomNumber={randomNumber}
            randomNumbers={randomNumbers}
            setRandomNumbers={setRandomNumbers}
            index={index}
          />}
        </div>;
      })}
      <button onClick={() => {
        alert(randomNumbers.map(n => n.number));
      }}>Submit</button>
    </div>
  );
}

export default App;

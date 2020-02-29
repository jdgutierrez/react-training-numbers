import React from 'react';


export default function EditNumber(props) {
    const {randomNumber, randomNumbers, setRandomNumbers, index} = props;
    return <div>
        <input value={randomNumber.tempValue} onChange={(evt) => {
            const newValue = evt.currentTarget.value;

            const index = randomNumbers.findIndex(n => n.number === randomNumber.number);
            if (index === -1) {
              return;
            }

            setRandomNumbers([
              ...randomNumbers.slice(0, index),
              { ...randomNumber, tempValue: newValue },
              ...randomNumbers.slice(index + 1),
            ]);
        }} />
        <button onClick={() => {
            const index = randomNumbers.findIndex(n => n.number === randomNumber.number);
            const exists = randomNumbers.find((rn, ix) => randomNumber.tempValue.toString() === rn.number.toString() && ix !== index);

            if (index === -1 || exists) {
              return;
            }

            setRandomNumbers([
              ...randomNumbers.slice(0, index),
              { ...randomNumber, number: parseInt(randomNumber.tempValue, 10), editing: false },
              ...randomNumbers.slice(index + 1),
            ]);
        }}>Guardar</button>
        <button onClick={() => {
            const index = randomNumbers.findIndex(n => n.number === randomNumber.number);
            if (index === -1) {
              return;
            }

            setRandomNumbers([
              ...randomNumbers.slice(0, index),
              { ...randomNumber, tempValue: randomNumber.number, editing: false },
              ...randomNumbers.slice(index + 1),
            ]);
          }}>Cancelar</button>
        {randomNumbers.find((rn, ix) => randomNumber.tempValue.toString() === rn.number.toString() && ix !== index) && 'Este numero esta duplicado'}
    </div>
}
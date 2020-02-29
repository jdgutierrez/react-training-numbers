import React from 'react';

class ShowNumber extends React.Component {
    constructor(props) {
        super(props);
        this.editarNumero = this.editarNumero.bind(this);
        this.eliminarNumero = this.eliminarNumero.bind(this);
    }
    
    editarNumero() {
        const { randomNumber, randomNumbers, setRandomNumbers } = this.props;
        const index = randomNumbers.findIndex(n => n.number === randomNumber.number);
        if (index === -1) {
            return;
        }

        setRandomNumbers([
            ...randomNumbers.slice(0, index),
            { ...randomNumber, editing: true },
            ...randomNumbers.slice(index + 1),
        ]);
    }

    eliminarNumero() {
        const { randomNumber, randomNumbers, setRandomNumbers } = this.props;
        const index = randomNumbers.findIndex(n => n.number === randomNumber.number);
        if (index === -1) {
            return;
        }

        setRandomNumbers([
            ...randomNumbers.slice(0, index),
            ...randomNumbers.slice(index + 1),
        ]);
    }

    render() {
        const { randomNumber } = this.props;
        return <div>
            {randomNumber.number}
            <button onClick={this.editarNumero}>Editar</button>
            <button onClick={this.eliminarNumero}>Eliminar</button>
        </div>;
    }
}

export default ShowNumber;
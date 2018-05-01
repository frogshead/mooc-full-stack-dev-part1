import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    kasvataArvoa = (status) => {
        return () => {
            console.log(status);
            this.setState((prevState) => ({[status]: prevState[status] + 1}));
        }
    }


    render() {
        return (
            <div>
                <h1>Anna Palautetta</h1>
                <Button handleClick={this.kasvataArvoa('hyva')} text="Hyvä" />
                <Button handleClick={this.kasvataArvoa('neutraali')} text="Neutraali" />
                <Button handleClick={this.kasvataArvoa('huono')} text="Huono" />
                <Statistics state={this.state} />
            </div>
        )
    }
}


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    if (props.state.hyva > 0 || props.state.neutraali > 0 || props.state.huono > 0) {

        return (
            <div>
                <h2>Statistiikka</h2>
                <Statistic text="Hyvä" value={props.state.hyva} />
                <Statistic text="Neutraali" value={props.state.neutraali} />
                <Statistic text="Huono" value={props.state.huono} />
                <Statistic text="Keskiarvo " value={(props.state.hyva - props.state.huono) / (props.state.hyva + props.state.neutraali + props.state.huono)} />
                <Statistic text="Positiivisia" value={props.state.hyva / (props.state.hyva + props.state.neutraali + props.state.huono)} />
            </div>
        )
    } else {
        return <p></p>
    }
}

const Statistic = ({ text, value }) => (
    <p>{text}: {value}</p>
)

ReactDOM.render(<App />, document.getElementById('root'));


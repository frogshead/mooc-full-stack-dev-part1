import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hyva: 0, 
            neutraali: 0,
            huono: 0
        }
    }

    setHyva = () => {
        console.log("hyvä set")
        this.setState({
            hyva: this.state.hyva + 1
        })
    } 
    setNeutraali = () => {
        console.log("Neutraali set")
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }
    setHuono = () => {
        console.log("Huono set")
        this.setState({
            huono: this.state.huono + 1
        })
    }
    
    render(){
        return(
            <div>
            <h1>Anna Palautetta</h1>

            <button onClick={this.setHyva}> hyvä </button>
            <button onClick={this.setNeutraali}> neutraali </button>
            <button onClick={this.setHuono}> huono </button>
            <h2>Statistiikka</h2>
            <p>Hyvä: {this.state.hyva}</p>
            <p>Neutraali: {this.state.neutraali}</p>
            <p>Huono: {this.state.huono}</p>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


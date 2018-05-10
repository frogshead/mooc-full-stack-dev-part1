import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: {}
        }


        for (let index = 0; index < anecdotes.length; index++) {
            this.state.votes[index] = 0;

        }

    }

    randomize() {
        return () => {
            let rnd = 0;
            while (rnd === this.state.selected) {
                rnd = Math.floor(Math.random() * anecdotes.length);
                console.log("Random: ", rnd);
            }
            this.setState({ selected: rnd });
        }
    }

    vote() {
        return () => {
            const cp = { ...this.state.votes };
            cp[this.state.selected] = cp[this.state.selected] + 1;
            this.setState({ votes: cp });

        }
    }



    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <br />
                <p>Has {this.state.votes[this.state.selected]} votes</p>
                <button onClick={this.randomize()}>New Anecdote</button>
                <button onClick={this.vote()}>Vote Me!</button>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

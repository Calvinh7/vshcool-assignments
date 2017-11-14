import React, {Component} from 'react';

class Input extends Component{
    constructor() {
        super();
        this.state= {
            word: "",
            currentWord: []
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.updateInput = this.updateInput.bind(this)
    }

    updateInput(event) {
        this.setState ({word: event.target.value})
    }

    handleSumbit() {
        this.setState ({currentWord: this.state.word})
    }

    render() {
        return (
            <div>
                <label>
                    Name:
                    <input type='text' value={this.state.word} onChange={this.updateInput} />
                </label>
                <button onClick={this.handleSumbit}>Submit</button>
                <h1>{this.state.currentWord}</h1>
                <ol>{this.state.currentWord.push}</ol>
            </div>
        );
    }
}

export default Input

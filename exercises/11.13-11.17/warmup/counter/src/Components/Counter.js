import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component{
    constructor() {
        super();
        this.state={
            clickCounter: 0
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSub = this.handleSub.bind(this)
    }

    handleAdd() {
        this.setState(prevState => {
            return {clickCounter: prevState.clickCounter + 1}
        })
    }

    handleSub() {
        this.setState(prevState => {
            return {clickCounter: prevState.clickCounter - 1}
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSub}>-</button>
                <CounterDisplay counter={this.state.clickCounter} />
            </div>
        )
    }
}

export default Counter

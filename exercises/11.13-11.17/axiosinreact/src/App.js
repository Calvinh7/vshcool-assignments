import React, {Component} from 'react';
import axios from 'axios';
import Person from './components/Person';

class App extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people").then((response) => {
            this.setState({people: response.data.results})
        })
    }

    render() {
        return this.state.people.map(person => {
            return <Person info={person} />
        })
    }
}

export default App

import React from "react"
import axios from "axios"

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: {
                title: "",
                dexcription: ""
            }
        }
    }
    componentDidMount() {
        axios.get("https://api.vschool.io/ericnatejones/todo").then(response =>{
            this.setState({
                todos: response.data.reverse();
            });
        });
    }
}

export default TodoList;

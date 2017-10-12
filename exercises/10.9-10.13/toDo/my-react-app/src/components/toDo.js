import React from "react"
import TodoItem from "./TodoItem"
import axios from "axios"

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoes: []
        }
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    componentDidMount() {
        axios.get('url').then(response => {
            this.setState({
                todos: response.date
            });
        });
    }

    deleteTodo(id) {
        axios.delete('url').then(response => {
            this.setState(prevState => {
                const newArr = prevState.todos.filter(item => item._id !== id)
                return {
                    todos: newArr
                }
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.todos.map((item, i) => {
                    return (
                        <TodoItem
                            todo={item}
                            key={item.title + i}
                            deleteTodo={this.deleteTodo}/>
                    )
                })}
            </div>
        )
    }
}

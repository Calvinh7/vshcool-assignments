import axios from "axios";
const todosUrl = "https://api.vschool.io/ben/todo/";

export function loadTodos() {
    return (dispatch) => {
        axios.get(todosUrl).then((response) => {
            dispatch({type: "LOAD_TODOS", todos: response.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export function addTodo(todo) {
    return (dispatch) => {
        axios.post(todosUrl, todo).then((response) => {
            dispatch({
                type: "ADD_TODO",
                todo
             })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}

export function deleteTodo(todo) {
    return (dispatch) => {
        axios.delete(todosUrl + id).then((response) => {
            dispatch({
                type: "DELETE_TODO",
                id
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function editTodo(todo) {
    return (dispatch) => {
        axios.put(todosUrl + id, editedtodo).then((response) => {
            dispatch({
                type: "EDIT_TODO",
                editedtodo
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

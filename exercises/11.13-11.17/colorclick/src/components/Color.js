import React, {Component} from "react";
// import ClickDisplay from "./ClickDisplay"

class Color extends Component{
    constructor() {
        super();
        this.state = {
            bgColor: "red"
        }
        this.handleColorChange = this.handleColorChange.bind(this)
    }

    handleColorChange() {
        this.setState(prevState => {
            if(prevState.bgColor === "red"){
                return {bgColor: "blue"}
            } else {
                return {bgColor: "red"}
            }
        })
    }

    render() {
        const styles = {
            width: "20%",
            height: "100px",
            border: "solid black 1px",
            backgroundColor: this.state.bgColor
        }
        return <div style={styles} onClick={this.handleColorChange}></div>
    }
}

export default Color

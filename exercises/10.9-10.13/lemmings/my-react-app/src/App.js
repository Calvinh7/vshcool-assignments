import React from "react";
import NameForm from "./components/NameForm"
import NmaeList from "./components/NameList"

class App extends React.component {
    constructor() {
        super();
        this.state = {
            name: ""
            namelist: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
}


handleChange(event) {
    this.setState({
        name: event.target.value
    });
}

handleClick() {
    this.setState(prevState => {
        return {
            namelist: [...prevState.namelist, prevState.name],
            name: ""
        }
    });
}

        render() {
            return (
                <div>
                    <NameForm
                        handleChange={this.handleChange}
                        name={this.state.name}/>

                    <NameList names={this.state.namelsit}/>
                </div>
            )
    }
}

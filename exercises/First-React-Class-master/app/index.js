import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <H2>This is my First React component!</H2>
            </div>
        )
    }
}

// class App extends React.Component{
//     render(){
//         return (
//             <h1>Hello!</h1>
//         )
//     }
// }


ReactDOM.render(<Hello/>, documnet.getElementById("Hello"));
//ReactDOM.render(<App/>, document.getElementById("app"));

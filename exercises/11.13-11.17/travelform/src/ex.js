
import React, {Component} from "react";
class Form extends Component{
    constructor(){
        super()
        this.state = {
            one: "",
            two: "",
            three: "",
            animalType: 'Select an Animal Plzzz',
            checkers: true
        }
        this.handleInputsChange =  this.handleInputsChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        alert(`One: ${this.state.one} Two: ${this.state.two} Three: ${this.state.three}`)
        // console.log(this.state.one + ' ' + this.state.two + " " + this.state.three);
    }
    handleInputsChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(target);
        // console.log('Value ' + value);
        // console.log('Name ' + name);
        // condition ? (returned if true) : (returned if false);
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="one" onChange={this.handleInputsChange} value={this.state.one}/>
                    <input name="two" onChange={this.handleInputsChange} value={this.state.two}/>
                    <input name="three" onChange={this.handleInputsChange} value={this.state.three}/>
                    <input name='animalType' type='radio' onChange={this.handleInputsChange} value='Dog'/>Dog
                    <input name='animalType' type='radio' onChange={this.handleInputsChange} value='Cat'/>Cat
                    <input name='checkers' type='checkbox' onChange={this.handleInputsChange} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
export default Form

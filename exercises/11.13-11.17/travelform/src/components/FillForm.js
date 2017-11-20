import React, {Component} from 'react';

class FillForm extends Component {
    constructor() {
        super();
        this.State={
            inputs: {
                firstName: "",
                lastName: "",
                age: "",
                gender: "",
                destination: "",
                dietRestrictions: ""
            }
        }
        this.onInputChange = this.onInputChange.bind(this)

        }
        handleSubmit(e) {
            this.setState({})
        }

        onInputChange(e) {
            this.setState({inputs: e.target.value})
        }

        //name first/last, age, gender, destination, diet restrictions
        render() {
            return (
                <div>
                    
                </div>
            )
        }
    }

export default FillForm

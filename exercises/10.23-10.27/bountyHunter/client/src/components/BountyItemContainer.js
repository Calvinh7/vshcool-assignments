import React from "react";
import BountyItem from "./BountyItem"

class BountyContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleDisplay: false,
            editBounty: {
                title: props.bounty.title,
                description: props.bounty.description,
                completed:props.bounty.completed
            }
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                ...prevState,
                toggleDisplay: !prevState.toggleDisplay
            }
        });
    }

    handleEdit(event) {
        event.persist();
        this.setState((prevState) => {
            return {
                editBounty: {
                    ...prevState.editBounty,
                    [event.target.name]: event.target.type === "checkbox" ? event.target.checkbox : event.target.value
                }
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editBounty(this.props._id, this.state.editBounty)
    }

    render() {
        return (
            <BountyItem
                bounty={this.props.bounty}
                deleteBounty={this.props.deleteBounty}
                editedBounty={this.state.editBounty}
                handleEdit={this.handleEdit}
                handleSubmit={this.handleSubmit}
                toggleDisplay={this.state.toggleDisplay}
                handleToggle={this.handleToggle}
                />
        )
    }
}

export default BountyContainer

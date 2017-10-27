import React from "react"
import axios from "axios"
import { Row, Col } from "react-bootstrap"
import AddBountyForm from "./AddBountyForm"
import BountyItemContainer from "./BountyItemContainer"

class Bounty extends React.Component {
    constructor() {
        super();
        this.state = {
            bounties: [],
            newBounty: {
                title: "",
                description: ""
            }
        }
        this.postBounty = this.postBounty.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postBounty = this.postBounty.bind(this);
        this.editBounty = this.editBounty.bind(this);
    }

    componentDidMount() {
        axios.get("http://localhost:4000/bounty").then(response => {
            console.log(response.data);
            this.setState({
                todos: response.date.reverse()
            });
        });
    }

    postBounty(e) {
        e.preventDefault();
        if(this.state.newBounty.title === "") {
            alert("You have to provide a title to your Bounty")
        } else {
            axios.post(`http://localhost:4000/bounty`, this.state.newBounty).then(response => {
                console.log(response.data);
                this.setState(prevState => {
                    return {
                        bounties: [response.data, ...prevState.bounties],
                        newBounty: {
                            title: "",
                            description: ""
                        }
                    }
                });
            }).catch(err => {
                console.log(err);
                alert("Error: Check console");
            });
        }
    }

    deleteBounty(id) {
        axios.delete(`http://localhost:4000/bounty${id}`).then(response => {
            this.setState(prevState => {
                const newArr = prevState.bounties.filter(item => item._id !== id);
                return {
                    bounties: newArr
                }
            });
        });
    }

    editBounty(id, editedBounty) {
        axios.put(`http://localhost:4000/bounty${id}`, editedBounty).then(response => {
            let newEdit = response.data;
            this.setState((prevState) => {
                const newBounties = prevState.bounties.map((bounty) => {
                    if(bounty._id === id) {
                        return newEdit
                    } else {
                        return bounty
                    }
                });
                return {
                    ...prevState,
                    bounties: newBounties
                }
            });
        });
    }

    handleChange(event) {
        event.persist();
        this.setState((prevState) => {
            return {
                newBounty: {
                    ...prevState.newBounty,
                    [event.target.name]: event.target.value
                }
            }
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={6} smOffset={3}>
                        <AddBountyForm
                            handleChange={this.handleChange}
                            state={this.state}
                            handleSubmit={this.postBounty} />
                    </Col>
                </Row>
                <Row>
                {this.state.bounties.map((item, i) => {
                    return (
                        <Col xs={6} md={4} key={item.title + i}>
                            <BountyItemContainer
                                bounty={item}
                                deleteBounty={this.deleteBounty}
                                editBounty={this.editBounty} />
                        </Col>
                    )
                })}
                </Row>
            </div>
        )
    }
}

export default Bounty

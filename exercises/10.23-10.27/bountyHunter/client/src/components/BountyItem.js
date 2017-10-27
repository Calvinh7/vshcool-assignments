import React from "react";

function BountyItem(props) {
    return (
        <div>
            <h1 style={{textDecoration: props.editedBounty.completed ? "line-through" : "none"}}>{props.bounty.title}</h1>
            <h3>{props.todo.description}</h3>
            <button onClick={() => props.deleteBounty(props.todo._id)}>Delete</button>
            <button onClick={props.handleToggle}>Edit</button>
            <div className={props.toggleDisplay ? "show" : "hide"}>
                <form onSubmit={props.handleSubmit}>
                    <input onChange={props.handleEdit} value={props.editedBounty.title} name="title"type="text"placeholder="Edit Title"/>
                    <input onChange={props.handleEdit} value={props.editedBounty.description} name="description"type="text"placeholder="Edit Description"/>
                    <label>Completed</label>
                    <input onChange={props.handleEdit}type="checkbox" checked={props.editedBounty.completed} name="completed"/>
                    <button type="submit">Save</button>
                </form>
            </div>
            <hr/>
        </div>
    )
}

export default BountyItem

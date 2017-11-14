import React from "react";

function NameContainer(props) {

    const styles = {
        display: "inline-block",
        width: "20%",
        border: "solid black 1px",
        borderRadius: "25px",
        margin: "5px"
    }
    return (
        <div style={styles}>
            <h3>{props.card}</h3>
        </div>
    )
}

export default NameContainer;

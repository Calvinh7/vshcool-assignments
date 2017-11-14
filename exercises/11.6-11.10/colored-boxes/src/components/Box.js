import React from "react";

function Box(props) {

    const styles = {
        display: "inline-block",
        width: "20%",
        border: "solid red 1px",
        margin: "10px",
        backgroundColor: props.backgroundColor
    }
    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
            <p>{props.info2}</p>
        </div>
    )
};

export default Box;

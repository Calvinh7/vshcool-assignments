import React from 'react';

function Card(props) {
    const styles = {
        display: "inline-block",
        width: "20%",
        border: "solid black 1px",
        borderRadius: "25px",
        margin: "10px",
        backgroundColor: props.backgroundColor
    }
    return (
        <div style={styles}>
            <h1>{props.place}</h1>
            <h3>{props.price}</h3>
            <p>{props.timeToGo}</p>
        </div>
    )
};

export default Card;

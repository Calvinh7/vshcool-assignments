import React from "react";

function Body() {
    const styles = {
        height: "300px",
        width: "100vw",
        border: "solid black 1px",
        display: "inline-block",
        verticalAlign: "top",
    }
    return(
        <div style={styles}>
            <h3>Info</h3>
        </div>
    )
};

export default Body;

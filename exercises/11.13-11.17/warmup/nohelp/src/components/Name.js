import React from "react";
import NameContainer from "./NameContainer"

function Name() {
        const names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew", "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin"]

    return names.map((name, i) => {
        return <NameContainer card={name} key={name+i}/>
    })
}

export default Name;

import React from "react";

type counterPropsType = {
    addCount: () => void
    disabled: boolean;
    name: string
}

export function Counter(props: counterPropsType) {

    const counterClass = {
        color: "#ffffff",
        gridArea: "b",
        border: "1px solid black",
        borderRadius: "3px",
        backgroundColor: "gray",
        margin: "10px",
        padding: "10px",
        width: "60px"
    }

    return (

        <div style={counterClass}>
            <button onClick={props.addCount} disabled={props.disabled} >{props.name}</button>
        </div>)
        ;
}
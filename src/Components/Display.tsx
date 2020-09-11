import React from "react";


type DisplayPropsType = {
    count: number;
    disabled: boolean
}

export function Display(props: DisplayPropsType) {

    const displayClass = {
        color: props.disabled ? "crimson" : "#ffffff",
        gridArea: "a",
        border: "1px solid black",
        borderRadius: "3px",
        backgroundColor: "gray",
        margin: "0 auto",
        marginTop: "10px",
        padding: "10px",
        width: "60px"
    }

    return (
        <div style={displayClass}>
            {props.count}
        </div>)
}
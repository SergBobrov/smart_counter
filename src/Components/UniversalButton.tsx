import React from "react";

type counterPropsType = {
    onClickAction: () => void
    disabled: boolean;
    name: string
    positon: string
}

export function UniversalButton(props: counterPropsType) {

    const counterClass = {
        color: "#ffffff",
        gridArea: props.positon,
        border: "1px solid black",
        borderRadius: "3px",
        backgroundColor: "gray",
        margin: "10px",
        padding: "10px",
        width: "60px"
    }

    return (

        <div style={counterClass}>
            <button onClick={props.onClickAction} disabled={props.disabled} >{props.name}</button>
        </div>)
        ;
}
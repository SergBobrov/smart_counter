import React from "react";

type counterPropsType = {
    onClickAction: () => void
    disabled: boolean
    positon: string
    name: string

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
            <button disabled={props.disabled} onClick={props.onClickAction}>{props.name}</button>
        </div>)
        ;
}
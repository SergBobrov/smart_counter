import React from "react";

type resetPropsType = {
    disabled: boolean;
    onClickAction: () => void
    name: string
}

export function Reset(props: resetPropsType) {

    const resetClass = {
        color: "#ffffff",
        gridArea: "c",
        border: "1px solid black",
        borderRadius: "3px",
        backgroundColor: "gray",
        margin: "10px",
        padding: "10px",
        width: "60px"
    }


return (
    <div style={resetClass}>
        <button disabled={props.disabled} onClick={props.onClickAction}>{props.name}</button>
    </div>
)
}
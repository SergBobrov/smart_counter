import React from "react";


type DisplayPropsType = {
    value: number;
    disabled: boolean
}

export function Display(props: DisplayPropsType) {

       return (
        <div className={props.disabled ? "display_red" : "display"}>
            {props.value}
        </div>)
}
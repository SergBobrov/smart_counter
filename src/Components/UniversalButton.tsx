import React from "react";
import './counter.css';

type counterPropsType = {
    onClickAction: () => void
    disabled: boolean
    name: string

}

export function UniversalButton(props: counterPropsType) {

    // const disablred=  maxa

    return (

        <div className={"button_wrapper"}>
            <button className={"button"} disabled={props.disabled} onClick={props.onClickAction}>{props.name}</button>
        </div>
    )

}
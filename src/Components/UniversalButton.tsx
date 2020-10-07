import React from "react";
import './counter.css';

type counterPropsType = {
    onClickAction: () => void
    name: string
    disabled: boolean

}

export const UniversalButton: React.FC<counterPropsType> = (
    {onClickAction, name, disabled}) => {



    return (

        <div className={"button_wrapper"}>
            <button className={`button  + ${disabled ? "button_disabled" : ""}`}
                    disabled={disabled} onClick={onClickAction}>{name}</button>
        </div>
    )

}
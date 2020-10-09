import React, {ChangeEvent, Dispatch, SetStateAction, KeyboardEvent} from "react";


type ValueInputType = {
    name: string
    setValue: (s: number) => void
    value: string
    disabled: boolean
    onValueInputClick: () => void
}


export const ValueInput: React.FC<ValueInputType> = ({name, setValue, value, disabled, onValueInputClick}) => {

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(+e.currentTarget.value)
    }




    return (
        <div className={"fields_wrapper"}>
            <span className={"value_span"}>{name}</span>
            <input value={value} className={`input ${disabled ? "input_error" : ""}`} type="number"
                   onChange={changeValue} onClick={onValueInputClick}/>
        </div>
    )
};
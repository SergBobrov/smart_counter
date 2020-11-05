import React, {ChangeEvent} from "react";



type ValueInputType = {
    name: string
    setValue: (s: number) => void
    value: number
    disabled: boolean
}


export const ValueInput: React.FC<ValueInputType> = ({name, setValue, value, disabled}) => {

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }


    return (
        <div className={"fields_wrapper"}>
            <span className={"value_span"}>{name}</span>
            <input value={value} className={`input ${disabled ? "input_error" : ""}`} type="number"
                   onChange={changeValue}/>
        </div>
    )
};





























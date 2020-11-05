import React, {ChangeEvent} from "react";


type ValueInputType = {
    name: string
    setValue: (s: number) => void
    value: number
    currentValue: number | string
}


export const ValueInput: React.FC<ValueInputType> = ({name, setValue, value, currentValue}) => {


    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }


    return (
        <div className={"fields_wrapper"}>
            <span className={"value_span"}>{name}</span>
            <input value={value} className={`input ${currentValue === "Incorrect value!" ? "input_error" : ""}`}
                   type="number"
                   onChange={changeValue}/>
        </div>
    )
};
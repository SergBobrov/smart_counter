import React, {ChangeEvent, Dispatch, SetStateAction} from "react";


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
        <div>
            <span className={"value_span"}>{name}</span>
            <span><input value={value} className={`input ${disabled ? "input_error" : ""}`} type="number"
                         onChange={changeValue}/> </span>
        </div>
    )
};
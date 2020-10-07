import React, {ChangeEvent, Dispatch, SetStateAction} from "react";


type ValueInputType = {
    name: string
    setValue: Dispatch<SetStateAction<number>>
}


export const ValueInput: React.FC<ValueInputType> = ({name, setValue}) => {

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <div>
            <span className={"value_span"}>{name}</span>
            <span><input className={"input"} type="number" onChange={changeValue}/> </span>
        </div>
    )
};
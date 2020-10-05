import React, {useState} from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";

function App() {
    const maxValue = 5;

    let [value, setValue] = useState<number>(0);
    let [disabled, setDisabled] = useState(false)

    const increment = () => {
        setValue(++value)
        if (value === maxValue) {
            disabled = !disabled
            setDisabled(disabled)
        }
    }

    const reset = () => {
        setValue(0)
        setDisabled(false)
    }

    return (
        <div className={"wrapper"}>
            <Display value={value} disabled={maxValue === value}/>
            <UniversalButton name={"Counter"} onClickAction={increment} positon={"b"} disabled={disabled}/>
            <UniversalButton name={"Reset"} onClickAction={reset} positon={"c"} disabled={!disabled}/>
        </div>
    );
}

export default App;



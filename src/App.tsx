import React, {useState} from 'react';
import './Components/counter.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import {ValueInput} from "./Components/ValueInput";

function App() {


    let [value, setValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(5);

    let [disabled, setDisabled] = useState(false)


    const increment = () => {
        setValue(++value)
        if (value === maxValue) {
            disabled = !disabled
            setDisabled(disabled)
        }
    }

    const reset = () => {
        setValue(startValue)
        setDisabled(!disabled)
        value = startValue
    }


    const setCounterValue = () => {
        setValue(startValue)
    }


    return (
        <div className={"wrapper"}>
            <div className={"first_counter"}>
                <div className={"input_block"}>
                    <ValueInput setValue={setMaxValue} name={"max value:"}/>
                    <ValueInput setValue={setStartValue} name={"start value:"}/>
                </div>
                <div className={"buttons_block"}>
                    <UniversalButton name={"set"} onClickAction={setCounterValue} disabled={disabled}/>
                </div>
            </div>
            <div className={"second_counter"}>
                <Display value={value} disabled={disabled}/>
                <div className={"buttons_block"}>
                    <UniversalButton name={"inc"} onClickAction={increment} disabled={disabled}/>
                    <UniversalButton name={"reset"} onClickAction={reset} disabled={!disabled}/>
                </div>
            </div>
        </div>
    );
}

export default App;



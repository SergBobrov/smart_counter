import React, {useState} from 'react';
import './Components/counter.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import {ValueInput} from "./Components/ValueInput";

function App() {


    let [value, setValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(5);


    const increment = () => {
        setValue(++value)
        if (value === maxValue) {
        }
    }

    const reset = () => {
        setValue(startValue)
        value = startValue
    }


    const setCounterValue = () => {
        setValue(startValue)
    }

    const disabledSet = () => {
        return false
    }

    const disabledInc = () => {

        return value === maxValue
    }

    const disabledReset = () => {
        return false
    }


    return (
        <div className={"wrapper"}>
            <div className={"first_counter"}>
                <div className={"input_block"}>
                    <ValueInput setValue={setMaxValue} name={"max value:"}/>
                    <ValueInput setValue={setStartValue} name={"start value:"}/>
                </div>
                <div className={"buttons_block"}>
                    <UniversalButton name={"set"} onClickAction={setCounterValue} disabled={disabledSet()}/>
                </div>
            </div>
            <div className={"second_counter"}>
                <Display value={value} />
                <div className={"buttons_block"}>
                    <UniversalButton name={"inc"} onClickAction={increment} disabled={disabledInc()}/>
                    <UniversalButton name={"reset"} onClickAction={reset} disabled={disabledReset()}/>
                </div>
            </div>
        </div>
    );
}

export default App;



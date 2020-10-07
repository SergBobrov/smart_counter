import React, {useState} from 'react';
import './Components/counter.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import {ValueInput} from "./Components/ValueInput";

function App() {


    let [value, setValue] = useState<number | string>(0);
    let [startValue, setStartValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(5);

    let [disableSet, setDisableSet] = useState(true)
    let [disableSet, setDisableSet] = useState(true)
    let [disableSet, setDisableSet] = useState(true)



    const increment = () => {
        if (typeof value === "number") {
            setValue(++value)
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
        if (maxValue <= startValue || startValue < 0) {
            return true
        }
        return false
    }

    const disabledInc = () => {

        return value === maxValue
    }

    const disabledReset = () => {

        return false
    }

    const disabledDisplay = () => {
        if (startValue < 0) return true
        return value === maxValue
    }

    const setMaxValueCallBack = (maxValue: number) => {
        value = "enter values and press 'set'"
        if (maxValue <= startValue) {
            value = "Incorrect value!"
        }
        setMaxValue(maxValue)
        setValue(value)
    }

    const setStartValueCallBack = (startValue: number) => {
        value = "enter values and press 'set'"
        if (startValue < 0 || startValue >= maxValue) {
            value = "Incorrect value!"
        }
        setValue(value)


        if (startValue < 0) {
            setValue(value)
        }
        if (startValue >= 0) {
            value = startValue
        }
        setStartValue(startValue)

    }

    return (
        <div className={"wrapper"}>
            <div className={"first_counter"}>
                <div className={"input_block"}>
                    <ValueInput value={maxValue} setValue={setMaxValueCallBack} name={"max value:"}/>
                    <ValueInput value={startValue} setValue={setStartValueCallBack} name={"start value:"}/>
                </div>
                <div className={"buttons_block"}>
                    <UniversalButton name={"set"} onClickAction={setCounterValue} disabled={disabledSet()}/>
                </div>
            </div>
            <div className={"second_counter"}>
                <Display startValue={startValue} maxValue={maxValue} value={value}/>
                <div className={"buttons_block"}>
                    <UniversalButton name={"inc"} onClickAction={increment} disabled={disabledInc()}/>
                    <UniversalButton name={"reset"} onClickAction={reset} disabled={disabledReset()}/>
                </div>
            </div>
        </div>
    );
}

export default App;



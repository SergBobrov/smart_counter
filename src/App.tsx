import React, {KeyboardEvent, useState} from 'react';
import './Components/counter.css';
import {Display} from "./Components/Display";
import {UniversalButton} from "./Components/UniversalButton";
import {ValueInput} from "./Components/ValueInput";

function App() {


    let [value, setValue] = useState<number | string>(0);
    let [startValue, setStartValue] = useState<string>(restoreState('startValue', "0"));
    let [maxValue, setMaxValue] = useState<string>(restoreState('maxValue', "5"));

    let [disableSet, setDisableSet] = useState(true)
    let [disableInc, setDisableInc] = useState(false)
    let [disableReset, setDisableReset] = useState(false)


    const increment = () => {
        if (typeof value === "number") {
            setValue(++value)
        }
        if (value === +maxValue) {
            setDisableInc(true)
        }
    }

    const reset = () => {
        setValue(+startValue)
        value = +startValue
        setDisableInc(false)
    }


    const setCounterValue = () => {
        setValue(+startValue)
        setDisableReset(false)
        setDisableInc(false)
        setDisableSet(true)

    }


    const setMaxValueCallBack = (maxValue: number) => {

        setDisableSet(false)
        setDisableInc(true)
        setDisableReset(true)
        value = "enter values and press 'set'"
        if (+startValue < 0 || +startValue >= +maxValue) {
            value = "Incorrect value!"
            setDisableSet(true)
        }
        setMaxValue(maxValue.toString())
        setValue(value)
    }

    const setStartValueCallBack = (startValue: number) => {
        setDisableSet(false)
        setDisableInc(true)
        setDisableReset(true)
        value = "enter values and press 'set'"
        if (+startValue < 0 || +startValue >= +maxValue) {
            value = "Incorrect value!"
            setDisableSet(true)
        }
        setValue(value)
        setStartValue(startValue.toString())

        saveState("startValue", startValue)
        saveState("maxValue", maxValue)
    }

    const disabledInput = () => {
        return value === "Incorrect value!";
    }

    const onMaxInputClick = () => {
        setMaxValue("")
    }

    const onStartInputClick = () => {
        setStartValue("")

    }


    function saveState<T>(key: string, state: T) { //типизация дженериков
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    return (
        <div className={"wrapper"}>
            <div className={"first_counter"}>
                <div className={"input_block"}>
                    <ValueInput onValueInputClick={onMaxInputClick} disabled={disabledInput()} value={maxValue}
                                setValue={setMaxValueCallBack}
                                name={"max value:"}/>
                    <ValueInput onValueInputClick={onStartInputClick} disabled={disabledInput()} value={startValue}
                                setValue={setStartValueCallBack}
                                name={"start value:"}/>
                </div>
                <div className={"buttons_block"}>
                    <UniversalButton name={"set"} onClickAction={setCounterValue} disabled={disableSet}/>
                </div>
            </div>
            <div className={"second_counter"}>
                <Display disabled={disableInc} startValue={startValue} maxValue={maxValue} value={value}/>
                <div className={"buttons_block"}>
                    <UniversalButton name={"inc"} onClickAction={increment} disabled={disableInc}/>
                    <UniversalButton name={"reset"} onClickAction={reset} disabled={disableReset}/>
                </div>
            </div>
        </div>
    );
}

export default App;



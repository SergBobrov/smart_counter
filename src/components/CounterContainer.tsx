import React from "react";
import {ValueInput} from "./ValueInput";
import {UniversalButton} from "./UniversalButton";
import {Display} from "./Display";
import {IGlobalState} from "../redux/store";
import {
    counterReducerType,
    incrementCurrentValue,
    resetCurrentValue,
    setCurrentValue,
    setMaxValue
} from "../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";

export const CounterContainer = () => {
    // let [value, setValue] = useState<number | string>(0);
    // // let [startValue, setStartValue] = useState<number>(restoreState('startValue', 0));
    // // let [maxValue, setMaxValue] = useState<number>(restoreState('maxValue', 5));
    //
    // let [disableSet, setDisableSet] = useState(true)
    // let [disableInc, setDisableInc] = useState(false)
    // let [disableReset, setDisableReset] = useState(false)

    const state = useSelector<IGlobalState, counterReducerType>(state => state.counterState)

    let {currentValue, startValue, maxValue, setDisabled, incDisabled, resetDisabled} = state

    const dispatch = useDispatch()


    const incrementValue = () => {
        if (typeof currentValue === "number") {
            currentValue = ++currentValue
        }
        if (currentValue === maxValue) {
            setDisabled = true
            incDisabled = true
        }
        dispatch(incrementCurrentValue(currentValue, setDisabled, incDisabled))
    }

    const resetValue = () => {
        currentValue = startValue
        setDisabled = false
        incDisabled = false
        dispatch(resetCurrentValue(currentValue, setDisabled, incDisabled))
    }


    const setCounterValue = () => {
        currentValue = startValue
        setDisabled = true
        incDisabled = false
        resetDisabled = false
        dispatch(setCurrentValue(currentValue, setDisabled, incDisabled, resetDisabled))
    }


    const setMaxValueCallBack = (maxValue: number) => {
        setDisabled = false
        incDisabled = true
        resetDisabled = true

        currentValue = "enter values and press 'set'"
        if (startValue < 0 || startValue >= maxValue) {
            currentValue = "Incorrect value!"
            setDisabled = false
        }
        dispatch(setMaxValue(currentValue, setDisabled, incDisabled, resetDisabled, maxValue))
    }

    const setStartValueCallBack = (startValue: number) => {
        setDisabled = false
        incDisabled = true
        resetDisabled = true

        currentValue = "enter values and press 'set'"
        if (startValue < 0 || startValue >= maxValue) {
            currentValue = "Incorrect value!"
            setDisabled = true
        }

        saveState("startValue", startValue)
        saveState("maxValue", maxValue)

        dispatch(setMaxValue(currentValue, setDisabled, incDisabled, resetDisabled, startValue))
    }

    const disabledInput = () => {
        return currentValue === "Incorrect value!";
    }


    function saveState<T>(key: string, state: T) {
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
                    <ValueInput disabled={disabledInput()} value={maxValue}
                                setValue={setMaxValueCallBack}
                                name={"max value:"}/>
                    <ValueInput disabled={disabledInput()} value={startValue}
                                setValue={setStartValueCallBack}
                                name={"start value:"}/>
                </div>
                <div className={"buttons_block"}>
                    <UniversalButton name={"set"} onClickAction={setCounterValue} disabled={setDisabled}/>
                </div>
            </div>
            <div className={"second_counter"}>
                <Display disabled={incDisabled} startValue={startValue} maxValue={maxValue} value={currentValue}/>
                <div className={"buttons_block"}>
                    <UniversalButton name={"inc"} onClickAction={incrementValue} disabled={incDisabled}/>
                    <UniversalButton name={"reset"} onClickAction={resetValue} disabled={resetDisabled}/>
                </div>
            </div>
        </div>
    );
}
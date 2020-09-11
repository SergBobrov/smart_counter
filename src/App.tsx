import React, {useState} from 'react';
import './App.css';
import {Display} from "./Components/Display";
import {Counter} from "./Components/Counter";
import {Reset} from "./Components/Reset";
import {UniversalButton} from "./Components/UniversalButton";

function App() {

    let [count, setCount] = useState<number>(0);

    let [disabled, setDisbled] = useState<boolean>(false)

    const disableButton = () => {
        if (count === 5) {
            disabled = !disabled
            setDisbled(disabled)
        }
    };

    const resetDisable = () => {
        disabled=!disabled
        setCount(0);
        setDisbled(disabled)

    };

    const addCount = () => {
        count++
        setCount(count)
        disableButton()
    };

    return (
        <div className={"wrapper"}>
            <Display count={count} disabled={disabled}/>
           {/* <Counter name={"Counter"} disabled={disabled} addCount={addCount} />
            <Reset name={"Reset"} disabled={!disabled} resetDisable={resetDisable}/>*/}
            <UniversalButton name={"Counter"} disabled={disabled} onClickAction={addCount} positon={"b"}/>
            <UniversalButton name={"Reset"} disabled={!disabled} onClickAction={resetDisable} positon={"c"} />

        </div>
    );
}

export default App;



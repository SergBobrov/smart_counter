import React from "react";


type DisplayPropsType = {
    value: number | string;
    startValue: number
    maxValue: number
    disabled: boolean
}

export const Display: React.FC<DisplayPropsType> =
    ({disabled, value, maxValue, startValue}) => {

        const showValue = () => {
            return value
        }

        const className = () => {
            if (value === "Incorrect value!") {
                return "display display_red text"
            }
            if (value === "enter values and press 'set'") {
                return "display text"
            }
            if (disabled) {
                return "display display_red";
            }
            return 'display'

        }

        return (
            <div className={className()}>
                {showValue()}
            </div>)
    }
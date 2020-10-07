import React from "react";


type DisplayPropsType = {
    value: number | string;
    startValue: number
    maxValue: number
}

export const Display: React.FC<DisplayPropsType> =
    ({value, maxValue, startValue}) => {

        const showValue = () => {
           return value
        }

        const className = () => {


            // if(value === maxValue){
            //     return "display display_red"
            // }
            // if (startValue > maxValue){
            //     return "display display_red text"
            // }
            return 'display'

        }

        return (
            <div className={className()}>
                {showValue()}
            </div>)
    }
enum ACTIONS_TYPE {
    INCREMENT_CURRENT_VALUE = 'INCREMENT_CURRENT_VALUE',
    RESET_CURRENT_VALUE = 'RESET_CURRENT_VALUE',
    SET_CURRENT_VALUE = 'SET_CURRENT_VALUE',
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_START_VALUE = 'SET_START_VALUE',
}


export type counterReducerType = {
    currentValue: number | string
    startValue: number
    maxValue: number
    setDisabled: boolean
    incDisabled: boolean
    resetDisabled: boolean
}

let counterReducerInitState = {
    currentValue: 0,
    startValue: 0,
    maxValue: 5,
    setDisabled: true,
    incDisabled: false,
    resetDisabled: false,
}


export type CounterActionsType = ReturnType<typeof incrementCurrentValue>
    | ReturnType<typeof resetCurrentValue>
    | ReturnType<typeof setCurrentValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setStartValue>

export const counterReducer = (state: counterReducerType = counterReducerInitState, action: CounterActionsType): counterReducerType => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.currentValue,
                setDisabled: action.setDisabled,
                incDisabled: action.incDisabled
            }

        case ACTIONS_TYPE.RESET_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.currentValue,
                setDisabled: action.setDisabled,
                incDisabled: action.incDisabled
            }
        case ACTIONS_TYPE.SET_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.currentValue,
                setDisabled: action.setDisabled,
                incDisabled: action.incDisabled,
                resetDisabled: action.resetDisabled,
            }

        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                currentValue: action.currentValue,
                setDisabled: action.setDisabled,
                incDisabled: action.incDisabled,
                resetDisabled: action.resetDisabled,
                maxValue: action.maxValue,
            }
        case ACTIONS_TYPE.SET_START_VALUE:
            return {
                ...state,
                currentValue: action.currentValue,
                setDisabled: action.setDisabled,
                incDisabled: action.incDisabled,
                resetDisabled: action.resetDisabled,
                startValue: action.startValue,
            }
        default:
            return state
    }
}


export const incrementCurrentValue = (currentValue: number | string, setDisabled: boolean, incDisabled: boolean) => {
    return ({type: ACTIONS_TYPE.INCREMENT_CURRENT_VALUE, currentValue, setDisabled, incDisabled} as const)
}

export const resetCurrentValue = (currentValue: number | string, setDisabled: boolean, incDisabled: boolean) => {
    return ({type: ACTIONS_TYPE.RESET_CURRENT_VALUE, currentValue, setDisabled, incDisabled} as const)
}

export const setCurrentValue = (currentValue: number | string, setDisabled: boolean, incDisabled: boolean, resetDisabled: boolean) => {
    return ({type: ACTIONS_TYPE.SET_CURRENT_VALUE, currentValue, setDisabled, incDisabled, resetDisabled} as const)
}

export const setMaxValue = (currentValue: number | string, setDisabled: boolean, incDisabled: boolean, resetDisabled: boolean, maxValue: number) => {
    return ({
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        currentValue,
        setDisabled,
        incDisabled,
        resetDisabled,
        maxValue
    } as const)
}

export const setStartValue = (currentValue: number | string, setDisabled: boolean, incDisabled: boolean, resetDisabled: boolean, startValue: number) => {
    return ({
        type: ACTIONS_TYPE.SET_START_VALUE,
        currentValue,
        setDisabled,
        incDisabled,
        resetDisabled,
        startValue
    } as const)
}






















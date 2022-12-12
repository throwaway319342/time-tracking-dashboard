import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    'durationType' : 'daily'
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function changeDuration(durationType) {
        dispatch({
            type: 'durationType',
            durationType: durationType,
        })
    }

    return (
        <GlobalContext.Provider value = {{ durationType : state.durationType, changeDuration }}>
            {children}
        </GlobalContext.Provider>
    )
}
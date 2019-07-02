import React from 'react'

import reducer from './reducer'
export const initialState = {
    text: ''
}

/**
 * StateContext for access single source state and dispatch by using React.useContext
 * 
 */
export const StateContext = React.createContext(initialState)

/**
 * StateProvider for assign state to children
 */
const StateProvider = (props) => {
    let [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {
                props.children
            }
        </StateContext.Provider>
    )
}
export default StateProvider
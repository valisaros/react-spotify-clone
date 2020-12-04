import React, { createContext, useContext, useReducer } from "react";

// Prepare the Data Layer
export const StateContext = createContext();

// Make the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Getting acces to Data Layer
export const useStateValue = () => useContext(StateContext);
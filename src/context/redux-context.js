import React, {createContext} from "react";


export const StoreContext = createContext(null)

export const Provider = ({store, children}) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}
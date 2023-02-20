import { createContext } from "react";

const BooksContext = createContext()

function Provider({ children }) {









    return(
        <BooksContext.Provider value={value} >
            {children}
        </BooksContext.Provider>
    )
}
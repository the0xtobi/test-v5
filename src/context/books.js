import { createContext } from "react";
import axios from 'axios';

const BooksContext = createContext()

function Provider({ children }) {









    return(
        <BooksContext.Provider value={value} >
            {children}
        </BooksContext.Provider>
    )
}


export { Provider };
export default BooksContext;
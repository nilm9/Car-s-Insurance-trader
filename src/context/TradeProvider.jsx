import { createContext } from "react";

const TraderContext = createContext()

const TraderProvider = ({children}) => {

    return (
        <TraderContext.Provider>
            {children}
        </TraderContext.Provider>
    )
}

export{ 
    
    TraderProvider
}

export default TraderContext;

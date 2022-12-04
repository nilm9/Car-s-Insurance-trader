import { createContext,useState } from "react";
import { getSubYear } from "../helpers";
const TraderContext = createContext()

const TraderProvider = ({children}) => {


    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''

    })


    const handleChangeData = e =>{
        setData({
            ...data,
           [e.target.name] :e.target.value
       })
    }

    const tradeInsurance = () => {
        //A base
        let result = 2000

        // get difference from years
        const sub = getSubYear(data.year)
        // Sub 3% from each year
        result += ((sub *3) * result) / 100
        
        //Aamerican 15%
        //European 30%
        //Asiatic 5%

        //Basic 20%
        //Full 50%
    }


    return (
        <TraderContext.Provider
        value={{ handleChangeData, data, tradeInsurance}}>
            {children}
        </TraderContext.Provider>
    )
}

export{ 
    
    TraderProvider
}

export default TraderContext;

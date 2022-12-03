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
        const sub = getSubYear(data.year)
        console.log(sub);
        // get difference from years

        // Sub 3% from each year

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

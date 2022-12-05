import { createContext,useState } from "react";
import { getSubYear, getBrand,getPlan, formatMoney } from "../helpers";
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
    const [result, setResult] =useState(0)
    const [loading, setLoading] = useState(false)

    const tradeInsurance = () => {
        //A base
        let result = 2000

        // get difference from years
        const sub = getSubYear(data.year)
        console.log(sub);
        // Sub 3% from each year
        result += ((sub *3) * result) / 100
        console.log(result);
        //Aamerican 15%
        //European 30%
        //Asiatic 5%
        result *= getBrand(data.brand)

        //Basic 20%
        //Full 50%
        result *= getPlan(data.plan)
        result = formatMoney(result)
        setLoading(true)
        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 3000);
        


    }


    return (
        <TraderContext.Provider
        value={{ handleChangeData, data, tradeInsurance, result, loading}}>
            {children}
        </TraderContext.Provider>
    )
}

export{ 
    
    TraderProvider
}

export default TraderContext;

import { useContext } from "react";
import TraderContext from "../context/TradeProvider";

const useTrader = () => {
    return useContext(TraderContext)
}

export default useTrader
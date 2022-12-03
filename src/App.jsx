import AppSeguro from "./components/AppSeguro"
import { TraderProvider } from "./context/TradeProvider"
function App() {

  
  return (
    <TraderProvider>
        <AppSeguro/>
    </TraderProvider>
  )
}

export default App

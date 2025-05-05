
// import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CoinTable from './Components/CoinTable/CoinTable'
import Navbar from './Components/Navbar/Navbar'
import { CurrencyContext } from './Context/CurrencyContext'
import Home from './Pages/Home'
import { PerPageContext } from './Context/PerPageContext'
import Routing from "./Components/Routing/Routing"

function App() {

  // const [currency, setCurrency] = useState("USD");
  // const [perPage, setPerPage] = useState(10);
  return (
   <>
      {/* <CurrencyContext.Provider value={{currency, setCurrency}}>
        <Home/>
      </CurrencyContext.Provider> */}
      
      {/* <PerPageContext.Provider value={{perPage, setPerPage}}>
        <Home/>
      </PerPageContext.Provider> */}
      <Routing/>

   </>
  )
}

export default App

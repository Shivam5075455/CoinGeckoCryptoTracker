
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import CoinTable from './Components/CoinTable/CoinTable'
import Navbar from './Components/Navbar/Navbar'
import { CurrencyContext } from './Context/CurrencyContext'
import Home from './Pages/Home'

function App() {

  const [currency, setCurrency] = useState("USD")
  return (
   <>
      <CurrencyContext.Provider value={{currency, setCurrency}}>
        <Home/>
      </CurrencyContext.Provider>
   </>
  )
}

export default App

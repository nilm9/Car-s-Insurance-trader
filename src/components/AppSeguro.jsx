import React from 'react'
import FormCars from "./FormCars"
import useTrader from '../hooks/useTrader'
import Result from './Result'
import Spinner from './Spinner'
const AppSeguro = () => {

  const {result, loading} = useTrader()

  return (
    <>
    <header className='my-10'>
        <h1 className='text-white text-center text-4xl font-black'>Car's Insurance trader</h1>
    </header>
    <main className='bg-white md: w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10' >
        <FormCars />
        {loading ? 
        <Spinner/>
        : <Result/>}
    </main>
    
    
    </>
  )
}

export default AppSeguro
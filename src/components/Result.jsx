import React from 'react'
import useTrader from '../hooks/useTrader'
import { BRANDS, YEARS, PLANS } from '../constants';
import { useCallback, useRef} from 'react';

const Result = () => {
    const {result, data} = useTrader();
    const {brand, plan, year} = data;
    const yearRef = useRef(year)
    console.log(yearRef);

    //When the result changes we re render
    const [brandsName] = useCallback( BRANDS.filter(b => b.id === Number(brand) ), [result])

    const [brandsPlan] =     useCallback(PLANS.filter(b => b.id === Number(plan)) , [result])
     

    if(result === 0) return null;
  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-700 font-black text-3xl'>
            Return
        </h2>
        <p className='my-2'> 
            <span className='font-bold'>Brand: </span>
            {brandsName.name}
        </p>
        <p className='my-2'> 
            <span className='font-bold'>Plan: </span>
            {brandsPlan.name}
        </p>
        <p className='my-2'> 
            <span className='font-bold'>Car's age: </span>
            {yearRef.current}
        </p>
        <p className='my-2'> 
            <span className='font-bold text-xl'>Final trade: </span>
            {result}
        </p>
        
    </div>
  )
}

export default Result
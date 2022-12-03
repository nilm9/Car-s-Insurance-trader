import React from 'react'

const Error = ({children}) => {
  return (
    <div className='text-lg m-2 text-white bg-red-700 border text-center'>Error: {children}</div>
  )
}

export default Error
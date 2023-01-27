import React from 'react'
import oops from '../images/errorboundary-oops.gif'

const ErrorFallback = ({error}) => {
  return (
    <div className='errorboundary'>
        <img src={oops} alt='error' />
        <p>Oh no, something went wrong! Try refreshing the page please or try again later.</p>
        <pre style={{ color: "red", fontSize: "1rem" }}>error: {error.message}</pre>
    </div>
  )
}

export default ErrorFallback;
import React, { useContext } from 'react'
import Context from './Context'

const A = () => {
    let con = useContext(Context)
  return (
    <div>{con}</div>
  )
}

export default A
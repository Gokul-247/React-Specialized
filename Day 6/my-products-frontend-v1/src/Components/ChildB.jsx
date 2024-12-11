import React, { useContext } from 'react'
import { MyCustomContext } from './Parent'

const ChildB = () => {
    const {city} = useContext(MyCustomContext)
  return (
    <div>
        <h1>Child Components city is {city}</h1>
    </div>
  )
}

export default ChildB
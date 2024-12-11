import React, {useContext} from 'react'
import { MyCustomContext } from './Parent'

const ChildA = () => {
    const {name} = useContext(MyCustomContext)
  return (
    <div>
        <h1>Child components name is {name}</h1>
    </div>
  )
}

export default ChildA
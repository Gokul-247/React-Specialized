import React, { useContext } from 'react'
import { MyCustomContext

 } from './Parent'
const ChildC = ()=>  {
    const {name,city,company} = useContext(MyCustomContext)
  return (
    <div>
        Name: {name}
        <br/>
        City: {city}
        <br/>
        Comapnay: {company}
    </div>
  )
}

export default ChildC
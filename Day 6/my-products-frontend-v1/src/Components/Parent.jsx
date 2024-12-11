import React, { createContext } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC';

const MyCustomContext = createContext();

const Parent = () => {

    const name = 'Gokul'
    const city = 'Bangalore'
    const company = 'Deloitte'
    const email = 'gokul@gmail.com'

  return (
    <MyCustomContext.Provider value={{name, city, company}}>
        <h1>Parent Component</h1>
        <ChildA />
        <ChildB />
        <ChildC />
    </MyCustomContext.Provider>
  )
}

export {MyCustomContext}
export default Parent
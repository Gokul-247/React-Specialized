import React,  {useState} from 'react'

const CounterPage = () => {

    const [count,setCountfunction] = useState(0)
    function increment(){
        setCountfunction(count + 1)
        console.log("Increment =",count)
    }

    function decrement(){
        if(count<1){
            alert("Negative count is not allowed")
        }
        else{
            setCountfunction(count - 1)
            console.log("Decrement = ",count)
        }
    }

    function multytwo(){
        setCountfunction(count * 2)
    }

    function remove4(){
        if(count<1){
            alert("Negative count is not allowed")
        }
        else{
        setCountfunction(count - 4)
        }
    }

    function random_count(){
        setCountfunction(Math.floor(Math.random() * 101))
    }

    function reset(){
        setCountfunction(0)
    }

  return (
    <div>
        <h1>Total Count is {count}</h1>
        <button onClick={increment}>Increment</button>
        &nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button>
        &nbsp;&nbsp;
        <button onClick={multytwo}>Multiply by 2</button>
        &nbsp;&nbsp;
        <button onClick={remove4}>Remove by 4</button>
        &nbsp;&nbsp;
        <button onClick={random_count}>Random(0-100)</button>
        &nbsp;&nbsp;
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterPage
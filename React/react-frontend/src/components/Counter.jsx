// useState()

import { useEffect, useState } from "react"

// syntax:
// const [value, setValue] = useState(initialValue)

const Counter = () => {
    const [count, setCount] = useState(1)
    const [count1, setCount2] = useState(1)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const increaseBy2 = () => setCount2(count1+2)

    useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count+1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    // useEffect(() => {
    //     console.log(`Count has been changed. Count value: ${count1}`)
    // }, [count, count1])
    return (
        <div>
        {
            count>0&&
            <button className='btn btn-danger' onClick={decrement}>-</button>
        }
        <h1>{count}</h1> <br />
        <button className='btn btn-success' onClick={increment}>+</button>
        <h1>{count1}</h1>
        <button className="btn btn-warning" onClick={increaseBy2}>Increase Count 2</button>
    </div>
    
)
}

export default Counter
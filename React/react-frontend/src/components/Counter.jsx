// useState()

import { useState } from "react"

// syntax:
// const [value, setValue] = useState(initialValue)

const Counter = () => {
    const [count, setCount] = useState(1)
    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    return (
        <div>
        {
            count>0&&
            <button className='btn btn-danger' onClick={decrement}>-</button>
        }
        <h1>{count}</h1>
        <button className='btn btn-success' onClick={increment}>+</button>
    </div>
    
)
}

export default Counter
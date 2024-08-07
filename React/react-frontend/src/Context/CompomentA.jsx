import { useState } from 'react'
import ComponentB from './ComponentB'
import ComponentD from './ComponentD'


const CompomentA = () => {
    const [person, setPerson] = useState({
        name:"Ram",
        age:16,
        occupation:"student"
    })
    return (

    <div>
        <ComponentB/>
    </div>
  )

}


export default CompomentA
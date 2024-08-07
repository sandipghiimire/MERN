import React, { useContext } from 'react'
import CompomentA from './CompomentA'
import { usePerson } from './PersonContext'

const ComponentD = () => {
    const person = usePerson({person})
  return (
    <div>
        <h1>{person.occupation}</h1>
    </div>
  )
}

export default ComponentD
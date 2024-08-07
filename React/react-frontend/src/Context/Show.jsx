import React from 'react'
import CompomentA from './CompomentA'
import { PersonProvider } from './PersonContext'

const Show = () => {
  return (
    <PersonProvider>
        <CompomentA/>
    </PersonProvider>
  )
}

export default Show
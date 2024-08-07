import { createContext, useContext, useState } from "react"

const PersonContext = createContext()
export const PersonProvider = ({children}) => {
    const [person, setPerson] = useState({
        name:"Sandip",
        occupation:"Student",
        age:22
    })
    return(
        <>
        <PersonContext.Provider value={person}>
            {children}
        </PersonContext.Provider>
        </>
    )
}
// Custom hook that use personContext
export const usePerson = () => {
    return useContext(PersonContext)
}
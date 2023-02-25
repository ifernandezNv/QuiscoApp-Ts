import {createContext, useState, useEffect, ReactNode} from 'react'

interface QuiscoProps{
    children: ReactNode
}
const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    return (
        <QuiscoContext.Provider 
            value={{

            }}
        >
            {children}
        </QuiscoContext.Provider>
    )
}

export {
    QuiscoProvider
}
export default QuiscoContext
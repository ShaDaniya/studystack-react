import { createContext, useState, useEffect } from "react";
import GetServices from "../Services/GetServices";

export const WordsContext = createContext()

export const ContextProvider = ({children}) => {
    const [valueContext, setValueContext] = useState([])
    const values = {valueContext, setValueContext}

    const getWords = async () => {
        const words = await GetServices.getWords()
        setValueContext(words)
    }


    useEffect(() => {
        getWords()
    }, [])

    return (
        <WordsContext.Provider value={values}>
            {children}
        </WordsContext.Provider>
    )
}
import { getCurrentUser } from '@/lib/appwrite'
import { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext({
    isLoggedIn: false,
    setIsLoading: (value: boolean) => {},
    user: null,
    setUser: (value: any) => {},
    isLoading: true
})

export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser()
            .then((res: any) => {
                if (res) {
                    setIsLoggedIn(true)
                    setUser(res)
                } else {
                    setIsLoggedIn(false)
                    setUser(null)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])


    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoading,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
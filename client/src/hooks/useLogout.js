import { useAuthContext } from "./useAuthContext"
import { useState } from "react"

export const useLogout = () =>{
    const {dispatch} = useAuthContext()
    const [isLogged, setIsLogged] =useState(null)


    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user')
        setIsLogged(false)

        //dispatch logout context
        dispatch ({type : "LOGOUT"})
    }

    return {logout, isLogged}
}
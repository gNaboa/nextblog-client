
import React, { createContext, ReactNode, useState } from "react";

type UserContextProps={
    userInfo:{
        username?:string,
        password?:string
    },
    setUserInfo:React.Dispatch<React.SetStateAction<{}>>
}

export const UserContext = createContext({} as UserContextProps)


type ProviderProps={
    children:ReactNode
}


export function UserContextProvider({children}:ProviderProps){

   const [userInfo,setUserInfo] = useState({})

    return(
       <UserContext.Provider value={{userInfo,setUserInfo}}>
              {children}
       </UserContext.Provider>
    )
}



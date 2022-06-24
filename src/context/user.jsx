import { Children, createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [name, setName] = useState("teste");


    return(
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider;
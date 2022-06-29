import { Children, createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    const [name, setName] = useState("teste");
    const [user, setUser] = useState(null);


    return(
        <UserContext.Provider value={{name, setName, user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider;
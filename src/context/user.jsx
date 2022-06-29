import {createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({children}){
    let [userData, setUserData] = useState(null);


    return(
        <UserContext.Provider value={{ userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider;
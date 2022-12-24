import { createContext, useState} from 'react';

const MyContext = createContext();


export const MyProvider = ({children}) => {
    const [userName , setUserName] = useState("Raouf sahbi");

    return (
        <MyContext.Provider value={{userName , setUserName}}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext;

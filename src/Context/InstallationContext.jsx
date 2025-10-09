import { createContext, useState } from "react";

const InstallContext = createContext();

export const InstallProvider = ({children}) => {
    const [appSelect, setAppSelect] = useState([])
    return <InstallContext.Provider value={{appSelect, setAppSelect}}>{children}</InstallContext.Provider>
}
export default InstallContext;
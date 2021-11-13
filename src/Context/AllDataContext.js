import { createContext } from "react";
import AllData from "../Hooks/AllData";

export const DataContextProvider= createContext()
const AllDataContext = ({children}) => {
   const value = AllData()  
    return (
        <DataContextProvider.Provider value={value}>
            {children}
        </DataContextProvider.Provider>
    );
};

export default AllDataContext;
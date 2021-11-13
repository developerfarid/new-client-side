import React, { createContext } from 'react';
import useAllData from '../Hooks/useAllData';

export const AllContext=createContext()

const AllContextProvider = ({children}) => {
  const value=  useAllData()
    return (
        <AllContext.Provider value={value}>
            {children}
        </AllContext.Provider>
    );
};

export default AllContextProvider;
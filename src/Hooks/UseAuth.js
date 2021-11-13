import React, { useContext } from 'react';
import { DataContextProvider } from '../Context/AllDataContext';

const UseAuth = () => {
    return (
         useContext(DataContextProvider)
    );
};

export default UseAuth;
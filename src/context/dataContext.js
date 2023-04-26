import React, { useState, createContext, useEffect } from "react";


const DataContext = createContext();


export const DataProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({});
    const { Provider } = DataContext;

    const INITIAL_VALUES = {
        openModal,
        setOpenModal,
        data,
        setData
    }

useEffect(()=>{
console.log("teste PAssei")
},[])
    return (<Provider value={INITIAL_VALUES}>
        {
            children
        }
    </Provider>)

}

export default DataContext;
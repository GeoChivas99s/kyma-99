import React, { useState, createContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const { Provider } = DataContext;

  const INITIAL_VALUES = {
    openModal,
    setOpenModal,
    data,
    setData,
    userData,
    setUserData,
  };

  useEffect(() => {
    console.log("teste PAssei 111111");
  }, []);
  return <Provider value={INITIAL_VALUES}>{children}</Provider>;
};

export default DataContext;

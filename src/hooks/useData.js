import { useContext } from "react";
import DataContext from "../context/dataContext";

const useData = () => useContext(DataContext);

export default useData;

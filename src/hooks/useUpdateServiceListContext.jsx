import { useContext } from "react";
import UpdateServiceListContext from "../context/UpdateServiceListContext.jsx";

const useUpdateServiceListContext = () => useContext(UpdateServiceListContext);

export default useUpdateServiceListContext;

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
 // ✅ named import

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
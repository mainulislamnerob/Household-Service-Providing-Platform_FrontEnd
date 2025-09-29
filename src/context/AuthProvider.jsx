import { createContext } from "react";
import useAuth from "../hook/useAuth";


// Create context
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// Provider
const AuthProvider = ({ children }) => {
  const allContext = useAuth(); // contains { loginUser, user, logoutUser, etc. }

  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthDataContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthDataContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthDataContext.Provider>
  );
};

// Define PropTypes for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
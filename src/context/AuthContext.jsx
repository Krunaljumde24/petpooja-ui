import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // const [adminLoggedIn, setadminLoggedIn] = useState(false);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      // setadminLoggedIn(true);
      let userObj = {
        user: username,
        isLoggedIn: true,
      };
      localStorage.setItem("userDetails", JSON.stringify(userObj));
      return true;
    } else return false;
  };

  const logout = () => {
    // setadminLoggedIn(false);
    localStorage.removeItem("userDetails");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// export default AuthContext;

export { AuthContext, AuthContextProvider };

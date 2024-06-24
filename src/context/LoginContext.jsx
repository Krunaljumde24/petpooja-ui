import React, { createContext, useState } from "react";

const LoginContext = createContext();

const [adminLoggedIn, setadminLoggedIn] = useState(false);

const login = (username, password) => {
  if (username === "admin" && password === "admin") {
    setadminLoggedIn(true);
    return true;
  } else return false;
};

const logout = () => {
  setadminLoggedIn(false);
};
function LoginContextProvider({ children }) {
  return (
    <LoginContext.Provider value={{ login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;

export { LoginContext, LoginContextProvider };

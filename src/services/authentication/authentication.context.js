import React, { createContext } from "react";
import { loginRequest } from "./authentication.service";
import * as firebase from "firebase";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loginRequest(email, password);
      setUser(response.user);
      setIsLoading(false);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await firebase.auth().signOut();
      setUser(null);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const register = async (email, password, repeatPassword) => {
    setIsLoading(true);
    setError(null);
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setUser(response.user);
      setIsLoading(false);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

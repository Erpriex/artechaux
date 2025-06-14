import { DirectusContext, useDirectus } from "./directus";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props) => {
  const directus = useDirectus();
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    error: null,
  });

  const login = (email, password) => {
    directus.auth
      .login({ email, password })
      .then((result) => {
        setAuthState({
          ...authState,
          isAuthenticated: true,
          error: null,
          user: result.access_token,
        });
      })
      .catch((error) => {
        setAuthState({
          ...authState,
          error,
          user: null,
        });
      });
  };
  const logout = () => {
    directus.auth
      .logout()
      .then(() =>
        setAuthState({
          ...authState,
          isAuthenticated: false,
          error: null,
          user: null,
        })
      )
      .catch((error) => {
        setAuthState({
          ...authState,
          error,
        });
      });
  };
  const actions = {
    login,
    logout,
  };
  const content = {
    state: authState,
    actions,
  };

  console.log(authState);

  useEffect(() => {
    directus.auth
      .refresh()
      .then(() => {
        setAuthState({
          ...authState,
          error: null,
          isAuthenticated: true,
        });
      })
      .catch((error) => {
        setAuthState({
          ...authState,
          error,
          isAuthenticated: false,
        });
      });
  }, [directus]);

  return <AuthContext.Provider value={content}>{props.children}</AuthContext.Provider>;
};

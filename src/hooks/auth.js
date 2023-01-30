import {DirectusContext, useDirectus} from "./directus";
import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const useAuth = () => {
    useContext(AuthContext)


    return
}

export const AuthProvider = (props) => {
    const directus = useDirectus()
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        error: null
    })

    const login = (username, password) => {
        directus.auth.login({username, password})
            .then((result) => {
                setAuthState({
                    ...authState,
                    isAuthenticated: true,
                    error: null,
                    user: result.access_token
                })
            })
            .catch((error) => {
                setAuthState({
                    ...authState,
                    error,
                    user: null
                })
            })
    }
    const actions = {
        login
    }
    const content = {
        state: authState,
        actions
    }

    console.log(authState);

    useEffect(() => {
        directus.auth
            .refresh()
            .then(() => {
                setAuthState({
                    ...authState,
                    error: null,
                    isAuthenticated: true
                })
            })
            .catch((error) => {
                setAuthState({
                    ...authState,
                    error,
                    isAuthenticated: false
                })
            });
    }, [directus])

    return (
        <AuthContext.Provider value={content}>
            {props.children}
        </AuthContext.Provider>
    );
}
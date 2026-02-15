import { createContext, useContext, useState } from "react";


const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = (user) => {
        setUser(user);
    }
    const logoutUser = () => {
        setUser(null);
    }
    const value = {
        user,
        setUser,
        loginUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;


export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error("useAuth must be used within AuthContextProvider");
    return context;
}   
import React, {useState, useContext} from "react";

const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [isAuthenticated, setIsAuthenticated] = useState(false)


const login = () => {
    setIsAuthenticated(true)
};

const logout = () => {
    setIsAuthenticated(false)
};

return(
    <AuthContext.Provider value={{isAuthenticated, login , logout}}>
        {children}
    </AuthContext.Provider>
)
}
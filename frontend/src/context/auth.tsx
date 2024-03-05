import { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
    isLogged: boolean;
    login: () => void;
    logout: () => void;
}

const initialContext: AuthContextType = {
    isLogged: false,
    login: () => {},
    logout: () => {}
}

const contextAuth = createContext<AuthContextType>(initialContext);

export const LoggedProvider = ({ children }: { children: ReactNode }) => {
    const [isLogged, setIsLogged] = useState<boolean>(false);

    const login = () => {
        setIsLogged(true);
    }

    const logout = () => {
        setIsLogged(false)
    }

    return (
        <contextAuth.Provider value={{ isLogged, login, logout }}>
            {children}
        </contextAuth.Provider>
    )
}

export default contextAuth;
